import React from 'react'
import { Container } from '@mui/material'
import TextField from '@mui/material/TextField';




const InputForm = ({email,password,label}) => {
  return (
    <div>
    <Container>
    <TextField id="outlined-basic" type={email} password={password} label={label} variant="outlined" />

    </Container>
      
    </div>
  )
}

export default InputForm;