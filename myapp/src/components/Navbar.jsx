// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the stored role and redirect to the login page
    localStorage.removeItem('role');
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {role ? (
          <>
            <li className="greeting">Greetings, {role === 'admin' ? 'Admin' : 'User'}!</li>
            <li onClick={handleLogout} className="logout">Logout</li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
