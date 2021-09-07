import Select from '@material-ui/core/Select';

const Return=({listItems})=>{
   
    const [ret, setRet] = useState(false);

    const returnHandler = (event) => {
        setRet(true);
        setOpen(true);
      }
    const mileageHandler = (event) => {
        setMileage(event.target.value);
      }

      const dropHandler = (event) => {
        setAge(event.target.value);
      };

      const handlePriceOpen = () => {
      
        if (ret) {
          setOpenPrice(true);
          setPrice(5000);
          setRet(false);
        }
        else {
          setOpenPrice(true);
          const priceData = data.filter(obj => ((obj.availability=== true)&&obj.name === age));
          const prce = priceData[0].price * days;
          setPrice(prce);
        }
      }
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
    return(<>
        
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
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={3}>
            <Button 
                variant="contained" 
                color="primary"
                onClick={handlePriceOpen}
                disabled={(mileage<0)||!age}
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
export default Return;