import React,{useState,useEffect} from 'react'
import axios from 'axios'
//import {useHistory,useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
function Contact() {
  //let history = useHistory();
    //const { id } = useParams();
    const [data,setData] = useState()
    const loadUser = async ()=> {
      await axios.get("http://localhost:3001/getall").then(res=> setData(res.data))
    }
    useEffect(()=> {
        loadUser();
        
         //console.log(data)
    },[])
  const deleteUser = async id => {
     await axios.delete(`http://localhost:3001/get/${id}`)
     loadUser();
     //await axios.get("http://localhost:3001/getall").then(res=> setData(res.data))
  }

  return (
    <>
    <table>
  <thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">UserName</th>
    <th scope="col">Email</th>
    <th scope="col">Password</th>
    <th scope="col">ConfirmPassword</th>
    <th scope="col">Action</th>
  </tr>
  </thead>
  <tbody>
  
    {data && data.map((each,index)=>(
      
      <tr key={each._id}>
      <th scope="row">{index+1}</th>
      <td>{each.username}</td>
      <td>{each.email}</td>
      <td>{each.password}</td>
      <td>{each.confirmpassword}</td>
      <td className="">
        <Link to={`/user/view/${each._id}`} className="btn btn-primary m-2">View</Link>
        <Link to={`/user/edit/${each._id}`} className="btn btn-primary m-2">Edit</Link>
        <Link to="" className="btn btn-danger m-2" onClick={()=> {deleteUser(each._id)}}>Delete</Link>
      </td>
      </tr>
      
    ))}
  
  </tbody>
</table>
    </>
  )
}

export default Contact   