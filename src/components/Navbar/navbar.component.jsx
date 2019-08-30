import React from 'react';
import { Link } from 'react-router-dom'

import './navbar.styles.scss';

const Navbar = () => {
  return (
    <div className="container-nav">
      <h1 className="logo">Book Manager</h1>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books-list">Book List</Link></li>
        <li className="login">LogIn</li>
        <li className="signup">SignUp</li>
        <li className="logout">LogOut</li>
      </ul>
    </div>
  )
}

export default Navbar