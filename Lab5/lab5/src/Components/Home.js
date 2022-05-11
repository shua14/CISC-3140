import '../App.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

export default function Home(){
    
    console.log("test")

    return (
        <>
          <div className="title">
            Lab 5
          </div>
    
          <div className="row">
            <div className="viewData">
              <div><Link to='/ViewData'>View Data</Link></div>
            </div>
            <div className="insertCar">
              Insert Car
            </div>
            <div className="updateCar">
              Update Car 
            </div>
          </div>
        </>
      );
}