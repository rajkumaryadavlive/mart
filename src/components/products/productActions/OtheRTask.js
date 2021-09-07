import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React, { useState} from 'react';

const OtherTask=({setBook,modalStyle})=>{
    const [price, setPrice] = useState(0);

    const confirmBookingHandler = () => {
        setBook(true);
    }
    const handleClose=()=>{

    }

    return(<>
        <div style={modalStyle} className="paper">
          <FormControl className="formControl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <h4 id="simple-modal-title">Your Estimated price is ${price}</h4>
          </Grid>
          <Grid item xs={12}>Do you want to proceed ? </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={3}>
            <Button 
                variant="contained" 
                color="primary"
                onClick={confirmBookingHandler}
              >
                Yes
              </Button>
          </Grid>
          <Grid item xs={3}>
              <Button 
                  variant="contained" 
                  color="primary"
                  onClick={handleClose}
                >
                  No
                </Button>
          </Grid>
         </Grid>
          
        </FormControl>
        </div>  
         </>);
}

export  default OtherTask;
