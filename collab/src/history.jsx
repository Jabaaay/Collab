import React from 'react';
import logo from './assets/1.png';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';



function History() {

    const navigate = useNavigate(); // Hook to programmatically navigate

    // Function to handle navigation
    const history = () => {
        navigate('/history'); // Adjust the route as necessary
    
    
    }; 

    const dashboard = () => {
        navigate('/dashboard'); // Adjust the route as necessary
    
    
    }; 
    const status = () => {
        navigate('/status'); // Adjust the route as necessary
    
    
    }; 

    const logout = () => {
      navigate('/'); // Adjust the route as necessary
  
  
  }; 
  return (
  
    <>
    <nav>
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  </nav>
  <div className="card1">
    <div className="card2">

        <ul>
            <li onClick={dashboard}>Appointment</li>
            <li onClick={history}>VIew History</li>
            <li onClick={status}>Status</li>
            <li onClick={logout}>Log Out</li>
        </ul>

    </div>
    <div className="card3">

        <h1>History</h1>

        <div className="app">
        <table>
              <thead>
                <tr>
                  <th>Appointment Type</th>
                  <th>Purpose</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>

                  <tr>
                    <td>Individual</td>
                    <td>Academic Counseling</td>
                    <td>10 - 15 - 2024</td>
                    <td>9 - 10:00 am</td>
                    <td>Completed</td>

                  </tr>
                  
        
              </tbody>
            </table>
    

        </div>
        
    </div>
    
  </div>

  


  </>
    
    
  );





}

export default History;
