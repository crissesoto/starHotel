import React from 'react';
//import logo from "../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBNavbarBrand } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <MDBNavbarBrand href="/" className="mb-3 mt-3">
                <strong className="orange-text font-weight-bold">STARHOTEL</strong>
            </MDBNavbarBrand>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/dashboard" activeClassName="activeClass" className="warning-color-dark">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Overview
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/profile" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Profile
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/roomTypes" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="door-closed" className="mr-3"/>
                        Room types
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/rooms" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="bed" className="mr-3"/>
                        Rooms
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;