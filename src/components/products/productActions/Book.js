import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React, { useState} from 'react';
import {getModalStyle}  from '../../../utils/util'

const Book=({setOpen})=>{
    const [modalStyle] = useState(getModalStyle);

    
    const handleClose = () => {
          setOpen(false);
      };

    return(<>
        <div style={modalStyle} className="paper">
          <FormControl className="formControl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <h4 id="simple-modal-title">Your Booking is confirmed.</h4>
          </Grid>
          <Grid item xs={12}>Thanks for booking.</Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={3}>
              <Button 
                  variant="contained" 
                  color="primary"
                  onClick={handleClose}
                >
                  Close
                </Button>
          </Grid>
         </Grid>
          
        </FormControl>
        </div>
        </>)
}
export default Book;

const useStyles = makeStyles((theme) => ({
 
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));