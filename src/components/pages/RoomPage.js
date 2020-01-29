import React from 'react';
import TopNavigation from '../topNavigation';
import SideNavigation from '../sideNavigation';
import Footer from '../Footer';
import RoomTable from './sections/RoomTable';
import { MDBBtn} from 'mdbreact';


const RoomPage =  () => {
  return (
    <React.Fragment>
      <div className="flexible-content">
        <main id="content">
          <TopNavigation />
          <div className="m-3">
            <MDBBtn href="/addroomtype" color="dark" className="float-right" rounded>add room</MDBBtn>
          </div>
          <SideNavigation />
          <RoomTable />
          <Footer />
        </main>
      </div>
    </React.Fragment>
  )
}

export default RoomPage;