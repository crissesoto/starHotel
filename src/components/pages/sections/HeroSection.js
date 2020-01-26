import React, { Component } from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import { MDBMask, MDBRow, MDBCol,  MDBBtn, MDBView, MDBContainer} from "mdbreact";

class HeroSection extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <>
        <MDBView src={`https://www.lrt.lt/img/2019/08/16/491870-512810-1287x836.jpg`}>
          <MDBMask className="rgba-black-light d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">StarHotel Housekeeping</h1>
                  <hr className="hr-light my-4" />
                  <h5 className="text-uppercase mb-4 white-text "><strong>Management System</strong></h5>
                  <MDBBtn href="/signIn" outline color="white">staff</MDBBtn>
                  <MDBBtn href="#" outline color="white">manager</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </>
    );
  }
}

export default HeroSection;