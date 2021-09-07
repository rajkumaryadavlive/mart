import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { useStyles } from "../../../utils/useStyles";
import { getModalStyle } from "../../../utils/util";
const Book = ({ handleClose }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <>
      <div style={modalStyle} className={classes.paper}>
        <FormControl className="formControl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h4 id="simple-modal-title">Your Booking is confirmed.</h4>
            </Grid>
            <Grid item xs={12}>
              Thanks for booking.
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={handleClose}>
                Close
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    </>
  );
};
export default Book;
