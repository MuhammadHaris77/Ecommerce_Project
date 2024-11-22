import React, {  useRef, useState } from 'react'
import ResponsiveAppBar from '../components/Navbar';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';




const Login = () => {

  const [alert, setAlert] =useState(false)
  const [error,setError] = useState(null)
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()

  const userLoginFunc = (event) => {
    event.preventDefault()
    // console.log(email.current.value)
    // console.log(password.current.value)

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        setAlert(true)
        setTimeout(()=>{
             navigate('/products')  
         },1000)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      });
  }

  
  return (
   <div className='text-center'>
     <ResponsiveAppBar/>
     {  alert  &&  <Alert severity="success">User Login Succesfully!</Alert>}
     {  error  &&  <Alert severity="error">{error}</Alert>}

     <Container className='border border-slate-950  mt-4 p-4 text-center '  >
      <Typography className="text-center p-4" variant='h2' color='#bf360c'>
          User Login
        </Typography>
  
        <form onSubmit={userLoginFunc } style={{width:'300px',textAlign:'center', margin:'auto'}} >
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
        <button className='btn bt-primary' style={{ color: 'White', background: '#bf360c', width: "100px", padding: "10px"}}> Login </button>
        </form>

      </Container>
</div>
    )
}

export default Login;