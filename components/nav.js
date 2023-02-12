import React from 'react'
import{ Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <div className="d-flex flex-row  justify-content-end p-2">
      <Link  to="/home" className="p-3 a">Home</Link>
      <Link  to="/contact" className="p-3 a">contact</Link>
      <Link  to="/login" className="p-3 a">Login</Link>
      <Link to="/register" className="btn btn-primary w-15">Add User</Link>
    </div>
    </>
  )
}

export default Nav