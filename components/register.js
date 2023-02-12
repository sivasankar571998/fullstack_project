
import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
const Register = () => {
    let history = useHistory();
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    
    const handle = e => {
        
        setData({...data,[e.target.name] : e.target.value})
        
    }
    const submit = e => {
        e.preventDefault();
        //console.log(data)
        axios.post("http://localhost:3001/create",data).then(res=> console.log(res.data))
        history.push("/contact")
    }
    
  return (
    <>
    <h1>Add User</h1>
    <form onSubmit={submit}> 
        <input type="text" placeholder="Enter UserName" name="username" onChange={handle}/><br/><br/>
        <input type="email" placeholder="Enter EmailId" name="email" onChange={handle} /><br/><br/>
        <input type="password" placeholder="Enter Password" name="password" onChange={handle} /><br/><br/>
        <input type="password" placeholder="Enter confirmPassword" name="confirmpassword" onChange={handle} /><br/><br/>
        <input className="btn btn-primary" type="submit" value="Add User"/>
    </form>
    </>
  )
}

export default Register