import * as React from 'react';
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

const pages = ['login', 'register', 'products'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {

 const [anchorElNav,setAnchorElNav]= React.useState(null)
 const [anchorElUser,setAnchorElUser]= React.useState(null)






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
    page === 'login' ? navigate('/') : navigate(page)
   };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" >
      <Container maxWidth="xl" sx={{background:'#bf360c'}}>
        <Toolbar disableGutters>
         
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
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'black', display: 'flex' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
