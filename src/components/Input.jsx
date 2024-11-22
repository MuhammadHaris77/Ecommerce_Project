import {React,useState } from 'react'


const Input = ({placeholder, func}) => {
  const [val,setVal] = useState('')
  
  return (
    <div>
      <input placeholder={placeholder} value={val}  onChange={(e)=>setVal(e.target.value)}   />  
      <button onClick={()=>func(val)}>click </button>
    </div>
  )
}

export default Input;