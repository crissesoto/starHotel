import React, {Component} from 'react';
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import RoomTypeList from './sections/RoomTypesList';
import RoomTable from './sections/RoomTable';
import BreadcrumSection from './sections/BreadcrumSection';
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
        <AdminCardSection1 />
        <BreadcrumSection onChange={this.searchOnChange} title={this.state.typesTitle}/>
        <RoomTypeList roomTypes={filteredRoomtypes}/>
        <BreadcrumSection title={this.state.roomsTitle}  />
        <RoomTable/> 
        <AdminCardSection2 />
      </React.Fragment>
    )
  }
}

export default DashboardPage;