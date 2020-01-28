import React, {Component} from 'react';
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import RoomTypeList from './sections/RoomTypesList';
import RoomsLayout from './sections/RoomsLayout';
import BreadcrumSection from './sections/BreadcrumSection';
import TopNavigation from '../topNavigation';
import SideNavigation from '../sideNavigation';
import Footer from '../Footer';
import {roomTypes} from '../../roomtypes';

class DashboardPage extends Component {
  constructor(){
    super();
    this.state = {
      roomTypes: roomTypes,
      searchField: '',
      typesTitle: 'Overview Room Types',
      roomsTitle: 'Overview Rooms'
    }
  }

  // create a func to call with onChange()
  searchOnChange = (event) =>{
    // set state of the search field
    this.setState({searchField: event.target.value});
  }

  render(){
    // filter through the roomTypes array <RoomTypeList>
    const filteredRoomtypes = this.state.roomTypes.filter(type =>{
      return type.roomType.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    // filter through the rooms array <RoomTable/>
    return (
      <React.Fragment>
        <div className="flexible-content">
        <main id="content">
          <TopNavigation />
          <SideNavigation />
          <AdminCardSection1 />
          <BreadcrumSection onChange={this.searchOnChange} title={this.state.typesTitle}/>
          <RoomTypeList roomTypes={filteredRoomtypes}/>
          <BreadcrumSection title={this.state.roomsTitle}  />
          <RoomsLayout/> 
          <AdminCardSection2 />
          <Footer />
        </main>
        </div>
      </React.Fragment>
    )
  }
}

export default DashboardPage;