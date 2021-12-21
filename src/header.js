import logo from './logo.svg';
import './App.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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

function Header() {
  return (
    <div className="App">
          <Container maxWidth="lg">
          <Box sx={{ bgcolor: '#F0F0F0' }} >
             <Breadcrumbs aria-label="breadcrumb" separator=">">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          All properties
        </Link>
        <Typography color="text.primary">Plot in Shimla</Typography>
      </Breadcrumbs>
      </Box>
      </Container>
    </div>
  );
}

export default Header;
