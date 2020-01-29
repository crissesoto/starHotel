import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import RoomTypesPage from './pages/RoomTypesPage';
import AddRoomTypesPage from './pages/AddRoomType';
import RoomPage from './pages/RoomPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/dashboard' exact component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/roomTypes' component={RoomTypesPage} />
        <Route path='/addroomtype' component={AddRoomTypesPage} />
        <Route path='/rooms' component={RoomPage} />
      </Switch>
    );
  }
}

export default Routes;
