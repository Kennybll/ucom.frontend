import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getFileUrl } from '../../utils/upload';
import { getOrganizationUrl } from '../../utils/organization';
import OrganizationCard from './OrganizationCard';
import Popup from '../Popup';
import ModalContent from '../ModalContent';
import Rate from '../Rate';
import api from '../../api';
import loader from '../../utils/loader';
import LoadMore from '../Feed/LoadMore';

const OrganizationListPopupMore = (props) => {
  if (!props.tagTitle) {
    return null;
  }

  const [orgs, setOrgs] = useState([]);
  const [lastOrgId, setlastOrgId] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchOrgs = async ({ perPage, page, lastOrgId }) => {
    loader.start();
    setLoading(true);

    try {
      const params = {
        page,
        perPage,
        tagTitle: props.tagTitle,
        lastId: lastOrgId,
      };
      const data = await api.getTagOrgs(params);
      setOrgs(page === 1 ? data.data : orgs.concat(data.data));
      setMetadata(data.metadata);
      const lastId = data.data[data.data.length - 1];
      setlastOrgId(lastId.id);
    } catch (e) {
      console.error(e);
    }

    loader.done();
    setLoading(false);
  };

  useEffect(() => {
    fetchOrgs({ page: 1, perPage: 10, lastOrgId });
  }, [props.userId, props.organizationId, props.tagTitle]);

  return (
    <Popup onClickClose={props.onClickClose}>
      <ModalContent onClickClose={props.onClickClose}>
        <div className="entry-list entry-list_simple">
          <div className="entry-list__title">Organizations</div>

          <div className="entry-list__list">
            {orgs.map(item => (
              <div className="entry-list__item" key={item.id}>
                <div className="entry-list__card">
                  <OrganizationCard
                    avatarSrc={getFileUrl(item.avatarFilename)}
                    title={item.title}
                    nickname={item.nickname}
                    url={getOrganizationUrl(item.id)}
                  />
                </div>
                <div className="entry-list__rate">
                  <Rate value={+item.currentRate} className="rate_small" />
                </div>
              </div>
            ))}
          </div>

          {metadata.hasMore &&
            <div className="feed__loadmore">
              <LoadMore
                disabled={loading}
                onClick={() => {
                  if (loading) return;

                  fetchOrgs({
                    page: metadata.page + 1,
                    perPage: metadata.perPage,
                    lastOrgId,
                  });
                }}
              />
            </div>
          }
        </div>
      </ModalContent>
    </Popup>
  );
};

export default connect(state => ({
  organizations: state.organizations,
  tags: state.tags,
}))(OrganizationListPopupMore);
