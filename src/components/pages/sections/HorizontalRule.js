import React from 'react';
import { MDBCard, MDBCardBody, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact';

const HorizontalRule = ({onChange, title}) => {
  return (
    <MDBCard className="mb-3 mt-5 ">
        <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
                <MDBBreadcrumbItem className="font-weight-bold">{`${title}`}</MDBBreadcrumbItem>
            </MDBBreadcrumb>
        </MDBCardBody>
    </MDBCard>
  )
}

export default HorizontalRule;

