export const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      editable: false,
    },
    {
      field: 'code',
      headerName: 'Code',
      width: 140,
      editable: false,
    },
    {
      field: 'availability',
      headerName: 'Availability',
      type: 'boolean',
      width: 170,
      editable: false,
    },
    {
      field: 'needing_repair',
      headerName: 'Need to Repair',
      type: 'boolean',
      width: 200,
    },
    {
      field: 'durability',
      headerName: 'Durability',
      type: 'number',
      width: 170,
    },
    {
      field: 'mileage',
      headerName: 'Mileage',
      type: 'number',
      width: 170,
    }
  ];