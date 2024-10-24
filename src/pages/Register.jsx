import React from 'react'
import ResponsiveAppBar from '../components/Navbar'
import InputForm from '../components/Form'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Register = () => {
  return (
    <div className='text-center'>
      <ResponsiveAppBar />
      <Container className='border border-slate-950  mt-4 p-4 '  >
        <Typography variant='h2' color='#bf360c'>
          Register
        </Typography>
        <br />
        <InputForm type="email" label="Email" />
        <br />
        <InputForm type="password" label="Password" />
        <br />

        <Button variant="contained" sx={{ color: 'white', background: '#bf360c', width: "100px", padding: "10px", }} >Register</Button>

      </Container>


    </div>
  )
}

export default Register