import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBIcon} from "mdbreact";

class TopNavigationTrans extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const navStyle = { marginTop: "O.5rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <>
        <Router>
          <div>
            <MDBNavbar
              color="primary-color"
              style={navStyle}
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">StarHotel</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav right>
                    <MDBNavItem >
                      <MDBNavLink to="https://www.stardekk.com/nl/" target="_blank"><MDBIcon icon="home" /></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                      <MDBNavLink to="https://www.facebook.com/" target="_blank"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="https://www.instagram.com/" target="_blank"><MDBIcon fab icon="instagram" /></MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        </Router>
      </>
    );
  }
}

export default TopNavigationTrans;