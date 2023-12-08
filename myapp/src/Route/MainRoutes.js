// src/components/MainRoutes.js
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Login from '../components/Login';
import Register from '../components/Register';
import AdminHome from '../components/AdminHome';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/adminhome" element={<AdminHome />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRoutes;
