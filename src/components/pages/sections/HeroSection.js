import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
  MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import "./HeroSection.css";
import Particles from 'react-particles-js';


class HeroSection extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="classicformpage">
        <Router>
          <div>
            <MDBNavbar dark expand="md" fixed="top">
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="orange-text">STARHOTEL</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse")}
                />
                <MDBCollapse
                  id="navbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <MDBNavbarNav right>
                    <MDBNavItem active>
                      <MDBNavLink to="#!">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Office</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">IT support</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapseID && overlay}
          </div>
        </Router>

        <MDBView>
        <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 10,
	            "random": true
	        },
	        "move": {
	            "direction": "bottom",
	            "out_mode": "out"
	        },
	        "line_linked": {
	            "enable": false
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "remove"
	            }
	        },
	        "modes": {
	            "remove": {
	                "particles_nb": 10
	            }
	        }
	    }
	}} />
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5" id="content-media">
                  <h1 className="h1-responsive font-weight-bold">
                    Housekeeping Management
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                  Housekeeping management system ensures the staff is always up-to-date, rooms spotless, and  workflow smooth. 
                  Housekeeping supervisors can manage their staff and tasks from anywhere.
                  The staff are always up-to-date with their duties and don’t have to deal with as many interruptions.
                  </h6>
                </div>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBCard id="classic-card">
                    <MDBCardBody className="z-depth-2 white-text">
                    <form>
                      <h3 className="text-center">
                        <MDBIcon icon="user" /> Sign In:
                      </h3>
                      <hr className="hr-light" />
                      <MDBInput 
                      label="Type your email" 
                      type="email" 
                      validate 
                      error="wrong" 
                      success="right" 
                      name="name" 
                      icon="envelope" 
                      group
                      />
                      
                      <MDBInput
                        label="Type your password"
                        type="password"
                        validate
                        name="password"
                        icon="lock"
                        group
                      />
                      <div className="text-center mt-4 black-text">
                      <MDBBtn
                        /*type="submit"*/
                        gradient="peach"
                        rounded
                        href="/dashboard"
                        className="btn z-depth-1a">
                        Sign in
                      </MDBBtn>
                      </div>
                      </form>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default HeroSection;