import productList from "../../productData/productList";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useStyles } from "../../utils/useStyles";
import MenuItem from "@material-ui/core/MenuItem";
import { columns } from "../../constants/table.constants";
import ProductModel from "./productModel/ProductModel";
import Book from "./productActions/Book";
import Return from "./productActions/Return";
import OpenPrice from "./productActions/OpenPrice";
import OtherTask from "./productActions/OtheRTask";
export default function ProductList() {
  const [open, setOpen] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [price, setPrice] = useState(0);
  const [data, setData] = useState([]);
  const [srchInput, setSrchcInput] = useState("");
  const classes = useStyles();
  const [age, setAge] = useState("");
  const [days, setDays] = useState("No of Days");
  const [book, setBook] = useState(false);
  const [ret, setRet] = useState(false);
  const [mileage, setMileage] = useState("");

  useEffect(() => {
    searchHandler();
  }, [srchInput]);

  const searchHandler = () => {
    let datas1 = productList();
    let databody = datas1.product;
    let datas = [];
    for (let i = 0; i < databody.length; i++) {
      datas.push({ id: i + 1, ...databody[i] });
    }
    console.log(datas);
    if (srchInput) {
      setData(
        datas.filter((obj) =>
          obj.name.toLowerCase().includes(srchInput.toLowerCase())
        )
      );
    } else {
      setData(datas);
    }
  };
  const inputHandler = (event) => {
    setSrchcInput(event.target.value);
  };

  const returnHandler = (event) => {
    setRet(true);
    setOpen(true);
  };
  const handleOpen = (event) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenPrice(false);
    setBook(false);
    setDays("Days");
    setPrice(0);
    setAge("");
    setRet(false);
    setMileage(0);
  };

  const availableData = data.filter((obj) => obj.availability === true);
  const listItems = availableData.map((obj) => (
    <MenuItem value={obj.name}>{obj.name}</MenuItem>
  ));

  let body = ret ? (
    <Return
      listItems={listItems}
      setRet={setRet}
      setOpen={setOpen}
      setMileage={setMileage}
      setAge={setAge}
      setOpenPrice={setOpenPrice}
      setPrice={setPrice}
      setBook={setBook}
      setDays={setDays}
      ret={ret}
      data={data}
      age={age}
      handleClose={handleClose}
    />
  ) : book ? (
    <Book setOpen={setOpen} handleClose={handleClose} />
  ) : !openPrice ? (
    <OpenPrice
      listItems={listItems}
      handleClose={handleClose}
      ret={ret}
      setOpenPrice={setOpenPrice}
      data={data}
      setPrice={setPrice}
      setRet={setRet}
    />
  ) : (
    <OtherTask
      setBook={setBook}
      setopen={setOpen}
      price={price}
      handleClose={handleClose}
    />
  );

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className={classes.root}>
        <Input
          className="searchInput"
          margin="dense"
          type="search"
          onChange={inputHandler}
          value={srchInput}
          placeholder="Search"
        />
        <Button variant="contained" color="primary" onClick={searchHandler}>
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
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Book
        </Button>
        <Button variant="contained" color="primary" onClick={returnHandler}>
          Return
        </Button>
        <ProductModel open={open} handleClose={handleClose} body={body} />
      </div>
    </div>
  );
}
