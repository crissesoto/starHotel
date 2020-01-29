import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol } from 'mdbreact';

const AdminCardSection2 = () => {
  return (
    <MDBRow className="m-4">
        <MDBCol xl="3" md="6" className="mb-3">
          <MDBCard color="success-color" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon icon="gift"/>
              </div>
              <p className="white-text">Birthday</p>
              <h4><strong>10/02/2020</strong></h4>
            </MDBCardBody>
            <MDBCardBody>
              <p>Room 1</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-3">
          <MDBCard color="default-color" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon icon="birthday-cake"/>
              </div>
              <p className="white-text">WEDDING</p>
              <h4><strong>30/03/2020</strong></h4>
            </MDBCardBody>
            <MDBCardBody>
              <p>ROOM 5</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-3">
          <MDBCard color="success-color-dark" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon icon="briefcase"/>
              </div>
              <p className="white-text">CONFERENCE</p>
              <h4><strong>08/04/2010</strong></h4>
            </MDBCardBody>
            <MDBCardBody>
              <p>ROOM 4</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-3">
          <MDBCard color="default-color-dark" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon icon="camera"/>
              </div>
              <p className="white-text">PHOTOSHOOT</p>
              <h4><strong>07/06/2020</strong></h4>
            </MDBCardBody>
            <MDBCardBody>
              <p>ROOM 1</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
  )
}

export default AdminCardSection2;

