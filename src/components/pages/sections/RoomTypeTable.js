import React from 'react';
import { MDBDataTable } from 'mdbreact';

const RoomTypeTable = () => {
  const data = {
    columns: [
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Min. Guest',
        field: 'MinGuest',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Max. Guest',
        field: 'MaxGuest',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Default Guest',
        field: 'DefaultGuest',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Price / night',
        field: 'price',
        sort: 'asc',
        width: 150
      }
    ],
    rows: [
      {
        type: 'SUPERIOR ROOM',
        MinGuest: '2',
        MaxGuest: '6',
        DefaultGuest: '4',
        price: '€100',
      },
      {
        type: 'SUPERIOR VISTA',
        MinGuest: '2',
        MaxGuest: '4',
        DefaultGuest: '6',
        price: '€140',
      },
      {
        type: 'DELUXE PANORAMA',
        MinGuest: '2',
        MaxGuest: '8',
        DefaultGuest: '2',
        price: '€150',
      },
      {
        type: 'PANORAMA SUITE',
        MinGuest: '2',
        MaxGuest: '4',
        DefaultGuest: '2',
        price: '€160',
      },
      {
        type: 'SPLENDOUR SUITE',
        MinGuest: '2',
        MaxGuest: '10',
        DefaultGuest: '4',
        price: '€270',
      },
      {
        type: 'PANORAMA LOUNGE',
        MinGuest: '1',
        MaxGuest: '8',
        DefaultGuest: '2',
        price: '3100',
      },
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
      className="m-4"
    />
  );
}

export default RoomTypeTable;