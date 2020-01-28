import React, {Fragment} from 'react';
import RoomTypeTable from './RoomTypeTable';
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';



const RoomTypeList =  ({roomTypes}) =>{
    const RoomTypeArray = roomTypes.map((roomType,i)=>{
        return (
          <RoomTypeTable 
          key= {roomTypes[i].id}
          id= {roomTypes[i].id} 
          roomType= {roomTypes[i].roomType} 
          url= {roomTypes[i].url} 
          />
        );
    });

    return(
        <Fragment>
        <MDBRow>
        <MDBCol md="12">
          <MDBCard className="mt-1 mb-4">
            <MDBView className="gradient-card-header elegant-color">
              <h4 className="h4-responsive text-white">Room Types table</h4>
            </MDBView>
            <MDBCardBody>
              <MDBTable>
                <MDBTableHead textDark>
                  <tr>
                    <th>id</th>
                    <th>Room Type</th>
                    <th>picture</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {RoomTypeArray}
                </MDBTableBody>
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </Fragment>
    )
}

export default RoomTypeList;