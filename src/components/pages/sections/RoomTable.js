import React from 'react';
import { MDBDataTable} from 'mdbreact';

const RoomTable = () => {
  const data = {
    columns: [
      {
        label: 'Room',
        field: 'Room',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Type',
        field: 'Type',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Cleaning state',
        field: 'CleanState',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Vacant',
        field: 'Vacant',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Bedding',
        field: 'Bedding',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Bath',
        field: 'Bath',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Tech',
        field: 'Tech',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Located',
        field: 'Located',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        Room: 'Room 1',
        Type: 'PANORAMA LOUNGE',
        CleanState: 'Needs cleaning',
        Vacant: 'False',
        Bedding: 'King size',
        Bath: 'True',
        Tech: 'True',
        Located: 'Second floor'
      },
      {
        Room: 'Room 2',
        Type: 'DELUXE PANORAMA',
        CleanState: 'Clean',
        Vacant: 'True',
        Bedding: 'Dubble bed',
        Bath: 'True',
        Tech: 'Tue',
        Located: 'First Floor'
      },
      {
        Room: 'Room 3',
        Type: 'SUPERIOR ROOM',
        CleanState: 'Legionella',
        Vacant: 'False',
        Bedding: 'Bubble bed',
        Bath: 'True',
        Tech: 'True',
        Located: 'Thrid'
      },
      {
        Room: 'Room 4',
        Type: 'PANORAMA LOUNGE',
        CleanState: 'Needs cleaning',
        Vacant: 'False',
        Bedding: 'King size',
        Bath: 'True',
        Tech: 'True',
        Located: 'Second floor'
      },
      {
        Room: 'Room 5',
        Type: 'DELUXE PANORAMA',
        CleanState: 'Clean',
        Vacant: 'True',
        Bedding: 'Dubble bed',
        Bath: 'True',
        Tech: 'Tue',
        Located: 'First Floor'
      },
      {
        Room: 'Room 6',
        Type: 'SUPERIOR ROOM',
        CleanState: 'Legionella',
        Vacant: 'False',
        Bedding: 'Bubble bed',
        Bath: 'True',
        Tech: 'True',
        Located: 'Thrid'
      },
      {
        Room: 'Room 7',
        Type: 'PANORAMA LOUNGE',
        CleanState: 'Needs cleaning',
        Vacant: 'False',
        Bedding: 'King size',
        Bath: 'True',
        Tech: 'True',
        Located: 'Second floor'
      },
      {
        Room: 'Room 8',
        Type: 'DELUXE PANORAMA',
        CleanState: 'Clean',
        Vacant: 'True',
        Bedding: 'Dubble bed',
        Bath: 'True',
        Tech: 'Tue',
        Located: 'First Floor'
      },
      {
        Room: 'Room 9',
        Type: 'SUPERIOR ROOM',
        CleanState: 'Legionella',
        Vacant: 'False',
        Bedding: 'Bubble bed',
        Bath: 'True',
        Tech: 'True',
        Located: 'Thrid'
      },
      {
        Room: 'Room 10',
        Type: 'DELUXE PANORAMA',
        CleanState: 'Clean',
        Vacant: 'True',
        Bedding: 'Dubble bed',
        Bath: 'True',
        Tech: 'Tue',
        Located: 'First Floor'
      },
      {
        Room: 'Room 11',
        Type: 'SUPERIOR ROOM',
        CleanState: 'Legionella',
        Vacant: 'False',
        Bedding: 'Bubble bed',
        Bath: 'True',
        Tech: 'True',
        Located: 'Thrid'
      },
      {
        Room: 'Room 12',
        Type: 'PANORAMA LOUNGE',
        CleanState: 'Needs cleaning',
        Vacant: 'False',
        Bedding: 'King size',
        Bath: 'True',
        Tech: 'True',
        Located: 'Second floor'
      },
      {
        Room: 'Room 13',
        Type: 'DELUXE PANORAMA',
        CleanState: 'Clean',
        Vacant: 'True',
        Bedding: 'Dubble bed',
        Bath: 'True',
        Tech: 'Tue',
        Located: 'First Floor'
      },
      {
        Room: 'Room 14',
        Type: 'SUPERIOR ROOM',
        CleanState: 'Legionella',
        Vacant: 'False',
        Bedding: 'Bubble bed',
        Bath: 'True',
        Tech: 'True',
        Located: 'Thrid'
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

export default RoomTable;