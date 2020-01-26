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

    }
  }

  // create a func to call with onChange()
  searchOnChange = (event) =>{
    // set state of the search field
    this.setState({searchField: event.target.value});
    
    // filter trough the room types array
    const filteredRoomtypes = this.state.roomTypes.filter(type =>{
      return type.roomType.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    console.log(filteredRoomtypes);
  }

  render(){
    return (
      <React.Fragment>
        <BreadcrumSection />
        <AdminCardSection1 />
        <BreadcrumSection onChange={this.searchOnChange} />
        <RoomTypeList roomTypes={roomTypes}/>
        <BreadcrumSection />
        <RoomTable/>
        <AdminCardSection2 />
      </React.Fragment>
    )
  }
}

export default DashboardPage;