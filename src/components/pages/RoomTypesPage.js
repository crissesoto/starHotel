import React, {Component} from 'react';
import TopNavigation from '../topNavigation';
import SideNavigation from '../sideNavigation';
import Footer from '../Footer';
import RoomTypeList from './sections/RoomTypesList';
import {roomTypes} from '../../roomtypes';


class RoomTypesPage extends Component {

  constructor(){
    super();
    this.state = {
      roomTypes: roomTypes,
    }
  }
  render(){
    // filter through the roomTypes array <RoomTypeList>
    const filteredRoomtypes = this.state.roomTypes.filter(type =>{
      return type;
    });
    
    // filter through the rooms array <RoomTable/>
    return (
      <React.Fragment>
        <div className="flexible-content">
          <main id="content">
            <TopNavigation />
            <SideNavigation />
            <RoomTypeList roomTypes={filteredRoomtypes}/>
            <Footer />
          </main>
        </div>
      </React.Fragment>
    )
  }
}

export default RoomTypesPage;