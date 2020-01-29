import React, {Component} from 'react';
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import BreadcrumSection from './sections/BreadcrumSection';
import HorizontalRule from './sections/HorizontalRule';
import TopNavigation from '../topNavigation';
import SideNavigation from '../sideNavigation';
import Footer from '../Footer';
import RoomtypesOverview from './sections/RoomTypesOverview';

class DashboardPage extends Component {
  constructor(){
    super();
    this.state = {
      typesTitle: 'Overview Room Types',
      roomsTitle: 'Overview Rooms',
      events: 'Events happening'
    }
  }


  render(){

    // filter through the rooms array <RoomTable/>
    return (
      <React.Fragment>
        <div className="flexible-content">
        <main id="content">
          <TopNavigation />
          <SideNavigation />
          <AdminCardSection1 />
          <BreadcrumSection title={this.state.typesTitle}/>
          <RoomtypesOverview />
          <HorizontalRule title={this.state.events}  />
          <AdminCardSection2 />
          <Footer />
        </main>
        </div>
      </React.Fragment>
    )
  }
}

export default DashboardPage;