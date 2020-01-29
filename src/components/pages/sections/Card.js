import React from "react";
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBContainer, MDBIcon } from "mdbreact";

const Card = () => {
  return (
    <MDBContainer>
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Profile
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
      If you think the personal information Starhotel holds about you is incorrect, 
      then contact us please and ask them to correct it. 
      Only you or a person you authorise, such as a legal guardian or authorised agent, 
      can request the correction of your personal information.
      </p>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4 mx-auto">
          <MDBCard wide ecommerce className="">
            <MDBCardImage
              cascade
              src="https://www.tacares.com/sites/default/files/career/Careers%208.jpg"
              top
              alt="sample photo"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Alexdra Medinas</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Lead Administrative Assistant</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>
                <p><strong>ID:</strong> 340943</p>
                <p><strong>Jointed:</strong> 01/03.2010</p>
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-center"><MDBIcon icon="map-marker-alt" className="mr-1" />Ghent</span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    </section>
    </MDBContainer>
  );
}

export default Card;