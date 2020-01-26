import React from 'react'

const RoomTypeTable =  (props) => {

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.roomType}</td>
      <td><img url={`${props.url}`} alt="Room type"></img></td>
    </tr>

  )
};

export default RoomTypeTable;