import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom'

export default function Home(){
    
    return (
        <>
          <div className="title">
            Lab 5
          </div>
    
          <div className="row">
            <div className="viewData">
              <Link to='/ViewAllCars'>View All Cars</Link>
            </div>
            <div className="newCar">
            <Link to='/NewCar'>New Car</Link>
            </div>
            <div className="updateCar">
              Update Car 
            </div>
          </div>
        </>
      );
}