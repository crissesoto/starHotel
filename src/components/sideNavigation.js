import React from 'react';
//import logo from "../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBNavbarBrand } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <MDBNavbarBrand className="mb-3 mt-3">
                <strong className="dark-text">StarHotel</strong>
            </MDBNavbarBrand>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/" activeClassName="activeClass">
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
                <NavLink to="/404" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        404
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;