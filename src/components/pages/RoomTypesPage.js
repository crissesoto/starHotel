import React, {Component} from 'react';
import TopNavigation from '../topNavigation';
import SideNavigation from '../sideNavigation';
import Footer from '../Footer';
import RoomTypeTable from './sections/RoomTypeTable';
//import AddRoomType from '/AddRoomType';
import { MDBBtn} from 'mdbreact';


class RoomTypesPage extends Component {

  render(){

    return (
      <React.Fragment>
        <div className="flexible-content">
          <main id="content">
            <TopNavigation />
            <SideNavigation />
            <div className="m-3">
            <MDBBtn href="/addroomtype" color="dark" className="float-right" rounded>add room</MDBBtn>
          </div>
            <RoomTypeTable/>
            <Footer />
          </main>
        </div>
      </React.Fragment>
    )
  }
}

export default RoomTypesPage;