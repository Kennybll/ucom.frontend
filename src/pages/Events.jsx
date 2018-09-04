import React from 'react';
import UnAuthTable from './UnAuth/UnAuthTable';
import Footer from '../components/Footer';

const EventsPage = () => (
  <div className="content">
    <div className="content__inner">
      <UnAuthTable
        title="Events"
        onFilterClick={() => true}
      />

      <Footer />
    </div>
  </div>
);

export default EventsPage;
