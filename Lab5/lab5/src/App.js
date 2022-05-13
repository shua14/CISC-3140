import React from 'react';
import './App.css';
import ViewAllCars from './Components/ViewAllCars'
import Home from "./Components/Home"
import NewCar from "./Components/NewCar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes className='routes'>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/ViewAllCars' element={<ViewAllCars />}/>
          <Route exact path='/NewCar' element={<NewCar />}/>
        </Routes>
      </Router>
    </>
  )
}

