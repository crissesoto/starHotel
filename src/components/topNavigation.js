import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBIcon } from 'mdbreact';

class TopNavigation extends Component {

    render() {
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                <MDBNavbarBrand>
                    <strong className="font-weight-bold dashHeader" style={{color: '#2E2E2E', fontSize: '2rem' }}>Housekeeping Magement System</strong>
                </MDBNavbarBrand>
                <MDBNavbarNav right>
                    <MDBNavItem className="pr-3">
                        <a href="/" rel="noopener noreferrer" className="logo-out"><MDBIcon className="m-2" icon="sign-out-alt" />logout</a>
                    </MDBNavItem>
                  </MDBNavbarNav>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;