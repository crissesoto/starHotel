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
                        <a href="/" rel="noopener noreferrer" className="font-weight-bold logo-out"><MDBIcon icon="sign-out-alt" />Logout</a>
                    </MDBNavItem>
                  </MDBNavbarNav>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;