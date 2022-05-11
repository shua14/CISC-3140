import React from 'react';
import './App.css';
import ViewData from './Components/ViewData'
import Home from "./Components/Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);
  
  return (
    <>
      <Router>
        <Routes className='routes'>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/ViewData' element={<ViewData />}/>
        </Routes>
      </Router>
    </>
  );
}

