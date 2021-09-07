import { useState } from "react";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import { getModalStyle } from "../../../utils/util";
import { useStyles } from "../../../utils/useStyles";

const Return = (props) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const {
    setRet,
    setMileage,
    setAge,
    setOpenPrice,
    setPrice,
    listItems,
    data,
    age,
    ret,
    days,
    mileage,
    handleClose,
  } = props;

  const mileageHandler = (event) => {
    setMileage(event.target.value);
  };

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
      const prce = priceData[0].price * days;
      setPrice(prce);
    }
  };

  return (
    <>
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Return a Product</h2>

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
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <Input
              className="searchInput"
              margin="dense"
              type="number"
              onChange={mileageHandler}
              value={mileage}
              placeholder="Used Mileage"
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePriceOpen}
              disabled={mileage < 0 || !age}
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
export default Return;
