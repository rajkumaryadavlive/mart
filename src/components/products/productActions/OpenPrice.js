import Select from "@material-ui/core/Select";
import { Input } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { useStyles } from "../../../utils/useStyles";
import { getModalStyle } from "../../../utils/util";
const OpenPrice = ({
  listItems,
  handleClose,
  setOpenPrice,
  setPrice,
  setRet,
  ret,
  data,
}) => {
  const [days, setDays] = useState("No of Days");
  const [age, setAge] = useState("");
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const dropHandler = (event) => {
    setAge(event.target.value);
  };
  const handlePriceOpen = () => {
    if (ret) {
      setOpenPrice(true);
      setPrice(5000);
      setRet(false);
    } else {
      setOpenPrice(true);
      const priceData = data.filter(
        (obj) => obj.availability === true && obj.name === age
      );
      const prce = priceData[0] && priceData[0].price * days;
      setPrice(prce);
    }
  };

  const daysHandler = (event) => {
    setDays(event.target.value);
  };

  return (
    <>
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Book a Product</h2>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              defaultValue="Available are"
              onChange={dropHandler}
            >
              {listItems}
            </Select>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Input
              className="searchInput"
              margin="dense"
              type="number"
              onChange={daysHandler}
              value={days}
              placeholder="Days"
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePriceOpen}
              disabled={days < 1 || !age}
            >
              Yes
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              No
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default OpenPrice;
