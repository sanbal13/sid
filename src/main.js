import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';

const useStyles = makeStyles(theme => ({
  root: {
      minHeight: '100vh',
      height: '100%',
      width: '255px',
  },
  data: {
    padding: '1rem 0',
  },
  companyName: {
      width: 'min-content',
      margin: '3rem auto !important',
      fontSize: '26px',
      color: '#17181c',
      lineHeight: '36px',
      fontWeight: 'bold !important',
  },
  linkText: {
      color: '#17181c',
      textDecoration: 'none !important',
  },
  alignLeft: {
    textAlign: 'left',
  },
  border: {
    border: '1px solid #000',
    padding: '1rem .5rem',
  },
  img: {
    backgroundColor: 'red',
    height: '10rem',
  }
}))

let data = [
    {"field":"Title", "value":"Plot in Shimla"},
    {"field":"Location", "value":"2113 Thornridge Cir. /n Syrocuse, Connecticut /n 35624"},
    {"field":"Name of Owner", "value":"Nirav Parmar"},
    {"field":"For", "value":"New Booking"},
    {"field":"It's", "value":"Residential, Flat"},
    {"field":"Area", "value":"69.58 sqft"},
    {"field":"Condition", "value":"Ready to move"},
    {"field":"Furnishing", "value":"Fuly Furnished"},
    {"field":"Property Rate", "value": "&#8377 25,00,000"},
    {"field":"Brokerage", "value":"&#8377 25,00,000"},
    {"field":"Bedroom", "value":"3"},
    {"field":"Bathroom", "value":"2"},
    {"field":"Balcony", "value":"2"},
    {"field":"Kitchen", "value":"Fully Modular"},
    {"field":"Parking", "value":"2"},
    {"field":"Aminities", "value":"Lift,Swimingpool"},
    {"field":"Near By", "value":"Shop"},
    {"field":"Post Date", "value":"10 December,2021"}
];

function Main() {
    let dataLeft = data.filter((item, index) => index <= data.length/2);    
    let dataRight = data.filter((item, index) => index > data.length/2);   
    const classes = useStyles()
     return (       
    <div className="App">
        <Container maxWidth="lg">
    <h1 className={classes.alignLeft}>Plot in Shimla</h1>
    <div className={classes.border}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <Box sx={{ display: 'flex', p: 1, flexDirection: 'column', alignItems: 'flex-start' }}>
      {
      dataLeft.map((item, index) => {
        return (            
            <div className={classes.data}>
            <span className={classes.field}>{item.field}</span>
             <span className={classes.value}>: {item.value}</span>
             </div>
        ) 
      })}
    </Box>    
  </Grid>
  <Grid item xs={6}>
  <Box sx={{ display: 'flex', p: 1, m: 1, flexDirection: 'column', alignItems: 'flex-start'}}>
        {
      dataRight.map((item, index) => {
        return (            
          <div className={classes.data}>
            <span className={classes.field}>{item.field}</span>
             <span className={classes.value}>: {item.value}</span>
             </div>       
        ) 
      })}
    </Box>    
  </Grid>  
</Grid>
<Grid container spacing={2}>
  <Grid item xs={4}>
    <div className={classes.img}>
      
    </div>
  </Grid>
  <Grid item xs={4}>
  <div className={classes.img}>
      
      </div>
  </Grid>
  <Grid item xs={4}>
  <div className={classes.img}>
      
      </div>
  </Grid>
</Grid>
</div>
</Container>
    </div>
  );
}


export default Main;