
import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useHistory,useParams} from 'react-router-dom'

    
function Edit() {
    let history = useHistory();
    const {id} = useParams();
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    
    const handle = e => {
        
        setData({...data,[e.target.name] : e.target.value})
        
    }
    const submit = async e => {
        e.preventDefault();
        
        await axios.patch(`http://localhost:3001/get/${id}`,data).then(res=> console.log(res.data))
        //console.log(data)
        history.push("/contact")
    }
  return (
    <>
    <h1>Edit User</h1>
    <form onSubmit={submit}> 
        <input type="text" placeholder="Enter UserName" name="username" onChange={handle}/><br/><br/>
        <input type="email" placeholder="Enter EmailId" name="email" onChange={handle} /><br/><br/>
        <input type="password" placeholder="Enter Password" name="password" onChange={handle} /><br/><br/>
        <input type="password" placeholder="Enter confirmPassword" name="confirmpassword" onChange={handle} /><br/><br/>
        <input className="btn btn-primary" type="submit" value="Edit User"/>
    </form>
    </>
  )
}

export default Edit