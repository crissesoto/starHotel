import React from 'react';
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import RoomTypeList from './sections/RoomTypesList';
import RoomTable from './sections/RoomTable';
import BreadcrumSection from './sections/BreadcrumSection';
import {roomTypes} from '../../roomtypes';

const DashboardPage =  () => {
  return (
    <React.Fragment>
      <BreadcrumSection />
      <AdminCardSection1 />
      <BreadcrumSection />
      <RoomTypeList roomTypes={roomTypes}/>
      <BreadcrumSection />
      <RoomTable/>
      <AdminCardSection2 />
    </React.Fragment>
  )
}

export default DashboardPage;