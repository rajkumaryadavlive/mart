import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React, { useState} from 'react';

const OpenPrice=()=>{
    const [days, setDays] = useState("No of Days");
    const [age, setAge] = useState('');

    const daysHandler = (event) => {
        setDays(event.target.value);
      }
    return(<>
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
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={3}>
            <Button 
                variant="contained" 
                color="primary"
                onClick={handlePriceOpen}
                disabled={(days<1)||(!age)}
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
          
        
        </div>
        </>);
}
export default OpenPrice;