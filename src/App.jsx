import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Input from './components/Input'

function App() {

  const [val,setVal] = useState('')

 const  onclickFunc=(val)=>{
 console.log(val)
  }
  return (
    <>
      <h1>App</h1>
      <Input placeholder={"enter your value?"} func ={onclickFunc} />
    </>
  )
}

export default App
