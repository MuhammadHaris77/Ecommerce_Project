import React, { useRef, useState } from 'react'
import ResponsiveAppBar from '../components/Navbar'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { auth, } from '../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const email = useRef()
  const password = useRef()
  const navigate =useNavigate()

  const [alert, setAlert] =useState(false)
  const [error,setError] = useState(false)



  const userRegisterFunc = (event) => {
    event.preventDefault()
    // console.log(email.current.value)
    // console.log(password.current.value)


    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        setAlert(true)
        console.log('user register', user)
        setTimeout(()=>{
          navigate('/')

        },1000)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log('error', errorMessage)
        console.log(errorMessage)
        setError(true)


      });



  }
  return (
    <div className='text-center'>
      <ResponsiveAppBar />    
     {  alert  &&  <Alert severity="success">User Register Succesfully .</Alert>}
     {  error  &&  <Alert severity="error">User Register Failed</Alert>}

      <Container className='border border-slate-950  mt-4 p-4 text-center '  >
        <Typography className="text-center p-4" variant='h2' color='#bf360c'>
          User Register
        </Typography>

        <form onSubmit={userRegisterFunc} style={{ width: '300px', textAlign: 'center', margin: 'auto' }} >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={email}

            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input width='30px'
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              ref={password}
            />
          </div>
          <button className='btn bt-primary' style={{ color: 'White', background: '#bf360c', width: "100px", padding: "10px" }}> Register</button>
        </form>

      </Container>

    </div>
  )
}

export default Register