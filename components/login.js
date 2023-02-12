import React from 'react'
import {useState} from "react"
import axios from 'axios';
const Login = () => {
  const [token,setToken] = useState(null)
  const [data, setData] = useState({
    email: "",
    password: ""
})

const handle = e => {
    
    setData({...data,[e.target.name] : e.target.value})
    
}
const submit = e => {
    e.preventDefault();
    //console.log(data)
    axios.post("http://localhost:3001/login",data).then(res=> console.log(res.data))
}
  return (
    <>
    <h1>Login Form</h1><br/><br/>
    <form onSubmit={submit}>
        <input type="email" placeholder="Enter EmailId" name="email" onChange={handle} /><br/><br/>
        <input type="password" placeholder="Enter Password" name="password" onChange={handle} /><br/><br/>
        <input className="btn btn-primary" type="submit" value="Login" />
    </form>
    </>
  )
}

export default Login