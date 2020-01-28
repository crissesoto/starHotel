import React from 'react';
import TopNavigation from '../topNavigation';
import SideNavigation from '../sideNavigation';
import Footer from '../Footer';
import RoomTable from './sections/RoomTable';


const RoomPage =  () => {
  return (
    <React.Fragment>
      <div className="flexible-content">
        <main id="content">
          <TopNavigation />
          <SideNavigation />
          <RoomTable />
          <Footer />
        </main>
      </div>
    </React.Fragment>
  )
}

export default RoomPage;