import React, { Component } from "react";
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput } from "mdbreact";

class AddRoomType extends Component {


  render() {

    return (
      <div id="classicformpage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBCard id="classic-card" className="mx-auto">
                    <MDBCardBody className="z-depth-2 white-text">
                      <h3 className="text-center">
                        Add new room.
                      </h3>
                      <hr className="hr-light" />
                        <div>
                        <select className="browser-default custom-select">
                            <option>Choose a room type</option>
                            <option value="1">SUPERIOR ROOM</option>
                            <option value="2">SUPERIOR VISTA</option>
                            <option value="3">DELUXE PANORAMA</option>
                            <option value="4">PANORAMA SUITE</option>
                            <option value="5">SPLENDOUR SUITE</option>
                            <option value="6">PANORAMA LOUNGE</option>
                        </select>
                        <select className="browser-default custom-select">
                            <option>Min. guest</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select className="browser-default custom-select">
                            <option>Default Guest</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select className="browser-default custom-select">
                            <option>Max. Guest</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <MDBInput type="number" label="Price / Night €" />
                        <MDBInput label="Location" />
                        </div>
                      <div className="text-center mt-4 black-text">
                        <MDBBtn href="/dashboard" color="indigo">Create</MDBBtn>
                        <hr className="hr-light" />
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default AddRoomType;