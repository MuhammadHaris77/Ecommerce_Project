import * as React from 'react';
import { useState ,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { getAuth, signOut } from "firebase/auth";
import { Alert } from '@mui/material';
import TemporaryDrawer from './Drawer';

const pages = ['login', 'register', 'products'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {

 const [anchorElNav,setAnchorElNav]= React.useState(null)
 const [anchorElUser,setAnchorElUser]= React.useState(null)
 const [alert, setAlert] =useState(false)
 const [showDrawer,setshowDrawer] = useState(false)




  const handleOpenNavMenu =(event)=>{
    setAnchorElNav(event.currentTarget)
  }  

  const handleOpenUserMenu=(event)=>{
   setAnchorElUser(event.currentTarget)
  }

 const navigate = useNavigate()

  const handleCloseNavMenu = (page) => {
    console.log("clicked item",page)
    setAnchorElNav(null);
    page === 'login' ? navigate('/')  :  page === 'products' ?  navigate('/products') : page === 'register' ?  navigate('/register') : null 
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

// <<<<<<<<======== SIGN OUT AUTH FIREBASE=======>>>>>>>

const logOutFunc=()=>{
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    setAlert(true)
    setTimeout(() => {
      navigate('/');
      
    }, 1000);

  }).catch((error) => {
    // An error happened.

  });
  
}

  return (

    <AppBar position="static"  >
      <Container maxWidth="xl" sx={{background:'#bf360c'}}>

        <Toolbar disableGutters>
        <AddShoppingCartIcon/>
          <Box  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu 
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none', }  } }
              
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=>handleCloseNavMenu(page)}>
                  <Typography sx={{ textAlign:'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'center', } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'd-flex',padding:'0px 30px' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button sx={{color:'white'}} onClick={()=>{
           console.log("open drawer")
           setshowDrawer(true)

          }} >
 </Button>
 
 <TemporaryDrawer/>
          <Button sx={{color:'white'}} onClick={logOutFunc} >LOGOUT </Button>
     
          </Toolbar>

      </Container>
      {  alert  &&  <Alert severity="success">User Logout Succesfully!</Alert>}
      {showDrawer && <TemporaryDrawer/>}
    </AppBar>
  );
}
export default ResponsiveAppBar;
