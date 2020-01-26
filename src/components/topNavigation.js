import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBIcon } from 'mdbreact';

class TopNavigation extends Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                <MDBNavbarBrand href="/">
                    <strong>MDB</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav right>
                    <MDBNavItem className="pr-3">
                        <a href="https://www.stardekk.com/nl/" target="_blank" rel="noopener noreferrer"><MDBIcon icon="home" /></a>
                    </MDBNavItem>
                    <MDBNavItem className="pr-3">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="facebook-f" /></a>
                    </MDBNavItem>
                    <MDBNavItem className="pr-3">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="instagram" /></a>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;