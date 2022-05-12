import React from 'react';
import './App.css';
import ViewData from './Components/ViewData'
import Home from "./Components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes className='routes'>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/ViewData' element={<ViewData />}/>
        </Routes>
      </Router>
    </>
  )
}

