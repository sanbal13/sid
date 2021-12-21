import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
      minHeight: '100vh',
      height: '100%',
      width: '255px',
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
  }
}))

function App() {
  return (
    <Box sx={{ bgcolor: '#F0F0F0' }} >
    <div className="App" >
     <Header />
     <Main />
    </div>
    </Box>
  );
}

export default App;
