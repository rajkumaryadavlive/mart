
import productList from '../../productData/productList';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {columns} from '../../constants/table.constants';
import ProductModel from './productModel/ProductModel';

  export default function ProductList() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [srchInput, setSrchcInput] = useState("");
    const classes = useStyles();
    
    useEffect(() => {
      searchHandler();
    }, [srchInput]); 
  

    const searchHandler = () => {
      let datas1 = productList();
      let databody = datas1.product;
      let datas = [];
      for (let i = 0; i < databody.length; i++) {
        datas.push({"id":i+1, ...databody[i]}) ;
      }
      console.log(datas);
      if (srchInput) {
        setData(datas.filter(obj => obj.name.includes(srchInput)));
      }
      else {
        setData(datas); 
      }
   }
    const inputHandler = (event) => {
      setSrchcInput(event.target.value);
    }

    const returnHandler = (event) => {
        //setRet(true);
        setOpen(true);
      }
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose=()=>{
        setOpen(false);
    }
  
    const availableData = data.filter(obj => obj.availability=== true);
    const listItems = availableData.map((obj) =>
    <MenuItem value={obj.name}>{obj.name}</MenuItem>
    );
  
    
    return (
      <div style={{ height: 400, width: '100%' }}>
        <div className={classes.root}>
          <Input
            className="searchInput"
            margin="dense"
            type="search"
            onChange={inputHandler}
            value={srchInput}
            placeholder="Search"
          
          />
          <Button 
            variant="contained" 
            color="primary"
            onClick={searchHandler}
          >
            Search
          </Button>

        </div>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          checkboxSelection={false}
          disableSelectionOnClick
          disableMultipleSelection={true}
        />
        <div className={classes.root}>
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleOpen}
          >
            Book
          </Button>
          <Button 
            variant="contained" 
            color="primary"
            onClick={returnHandler}
            >
            Return
          </Button>

        </div>
      </div>
    );
  }

  
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
   
  }));