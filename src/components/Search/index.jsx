import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../Popup';
import styles from './styles.css';
import debounce from '../../utils/debounce';
import api from '../../api';
import urls from '../../utils/urls';
import loader from '../../utils/loader';
import UserCardLine from '../UserCardLine/UserCardLine';
import { getUserName } from '../../utils/user';
import { getFileUrl } from '../../utils/upload';
import Arrow from '../Icons/ArrowLeft';
import IconSearch from '../Icons/Search';
import IconClose from '../Icons/Close';
import IconDuck from '../Icons/Socials/Duck';

const SearchPopup = () => {
  // const [popup, showPopup] = useState(false);
  const [usersData, setUsersData] = useState({ data: [], metadata: {} });
  const [userName, setUserName] = useState('');
  const page = 1;
  const sortBy = '-current_rate';
  const perPage = usersData.data.length || 10;
  const usersParams = {
    page, sortBy, perPage, userName,
  };
  // const closeSearch = () => (console.log('a'));

  const getData = async (params) => {
    loader.start();

    try {
      const data = await api.getUsers(params);
      setUsersData(data);
    } catch (e) {
      console.error(e);
    }

    loader.done();
  };

  const onChangeSearch = (userName) => {
    getData({
      ...usersParams, userName, page: 1, perPage: 10,
    });
  };
  const debouncedSetSearch = debounce(onChangeSearch, 500);

  useEffect(() => {
    if (userName !== undefined) {
      debouncedSetSearch(userName);
    }
  }, [userName]);

  const usersCount = usersData.data;
  const users = [...usersCount];
  users.splice(7);

  const duckLink = `https://duckduckgo.com/?q=${userName}&sites=u.community&ia=web`;

  return (
    <div className={styles.modal}>
      <div className={styles.search}>
        <div className={styles.iconSearch}>
          <IconSearch />
        </div>
        <input
          onChange={(e) => {
            setUserName(e.target.value);
            debouncedSetSearch(e.target.value);
            // showPopup(!popup);
          }}
          className={styles.input}
          placeholder="Search for people, oragnizations, communities, tags, or @accounts in U°OS blockchain…"
          type="text"
          spellCheck="false"
          // onBlur={() => closeSearch()}
        />
        <div
          role="presentation"
          className={styles.iconClose}
        >
          <IconClose />
        </div>
      </div>

      {userName !== '' && (
        <Fragment>
          <Popup mod="search">
            <div className={styles.popup}>
              {users && users.length > 0 &&
                <div className={styles.column}>
                  <div className={styles.columnTitle}>Members</div>
                  {users && users.length > 0 &&
                    users.map(item => (
                      <UserCardLine
                        key={item.id}
                        url={urls.getUserUrl(item.id)}
                        userPickSrc={getFileUrl(item.avatarFilename)}
                        name={getUserName(item)}
                        accountName={item.accountName}
                        rate={item.currentRate}
                        sign="@"
                        // userId={item.id}
                      />
                    ))
                  }
                  {usersCount.length > 7 &&
                    <Link to={`/users/?page=1&sortBy=-current_rate&perPage=20&userName=${userName}`} className={styles.viewAll}>
                      <div className={styles.viewAllText}>View all</div>
                      <div className={styles.arrowRed}><Arrow /></div>
                    </Link>
                  }
                </div>
              }
              {users && users.length === 0 &&
                <div className={styles.notFound}>No Members Found</div>
              }
            </div>
          </Popup>
          <a href={duckLink} className={styles.footer} rel="noopener noreferrer" target="_blank">
            <div className={styles.searchLink}>Locate “{userName}” in posts and publications<span className={styles.iconDuck}><IconDuck /></span><span className={styles.arrowGrey}><Arrow /></span></div>
          </a>
        </Fragment>
      )}
    </div>
  );
};

export default SearchPopup;
