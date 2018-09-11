import React from 'react';
import cn from 'classnames';
import MyProfileItems from '../../components/MyProfileItems';

const MyProfileOrganizationsPage = () => (
  <div className="my-profile-list">
    <div className="my-profile-list__filters">
      <div className="my-profile-list__filters-element">All</div>
      <div className="my-profile-list__filters-element">My</div>
      <div className={cn(
        'my-profile-list__filters-element',
        { 'my-profile-list__filters-element_active': true },
        )}
      >
        On board
      </div>
      <div className="my-profile-list__filters-element">Trusted by me</div>
      <div className="my-profile-list__filters-element">Followed</div>
      <div className="my-profile-list__filters-element">Joined</div>
    </div>
    <MyProfileItems bottomLabel="create organization" renderButton />
  </div>
);

export default MyProfileOrganizationsPage;