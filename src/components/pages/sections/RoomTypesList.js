import React from 'react';
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
        <fragment>
        <MDBRow>
        <MDBCol md="12">
          <MDBCard className="mt-1 mb-4">
            <MDBView className="gradient-card-header blue darken-2">
              <h4 className="h4-responsive text-white">Room Types table</h4>
            </MDBView>
            <MDBCardBody>
              <h3 className="mt-5 text-left"><strong>MDBTable head options</strong></h3>
              <p>To change a background-color of thead (or any other element) use our color classes. If you are going to use a dark background you should also consider white text (to provide a proper contrast) by adding .text-white class.</p>
              <MDBTable>
                <MDBTableHead color="primary-color" textWhite>
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
      </fragment>
    )
}

export default RoomTypeList;