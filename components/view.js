import axios from 'axios'
import React from 'react'
import {useState,useEffect} from 'react'
import{useParams,Link} from 'react-router-dom'
function View() {
    const { id } = useParams ();
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    
    /*const loadUser = async e => {
        e.preventDefault();
        
        //console.log(data)
     }*/
     useEffect( ()=> {
         axios.get(`http://localhost:3001/get/${id}`).then(res=> setData(res.data))
     },[id]);
  return (
    <>      <Link className="btn btn-primary" to="/contact">Back Home</Link>
            <p>{data.username}</p>
            <p>{data.email}</p>
            <p>{data.password}</p>
    </>
  )
}

export default View