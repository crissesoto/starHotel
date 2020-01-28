import React, {Fragment} from 'react'
import TopNavigation from '../topNavigation';
import SideNavigation from '../sideNavigation';
import Card from './sections/Card'
import Footer from '../Footer';

const ProfilePage =  () => {
  return (
  <Fragment>
     <div className="flexible-content">
        <main id="content">
          <TopNavigation />
          <SideNavigation />
          <Card />
          <Footer />
        </main>
     </div>
   </Fragment>
  );
}

export default ProfilePage;