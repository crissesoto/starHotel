import React from 'react'
import {MDBCardImage} from 'mdbreact';

const RoomTypeTable =  (props) => {

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.roomType}</td>
      <td>
      <MDBCardImage 
      className="img-fluid" 
      src={`${props.url}`} 
      waves 
      style={{ width: "200px", height: "200px" }}
      />
      </td>
    </tr>

  )
};

export default RoomTypeTable;