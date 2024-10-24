import logo from './assets/1.png';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function Dashboard() {

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

            <h1>Book an Appointment</h1>

            <div className="app">

            <div className="type">

                <h2>Select Appointment Type: </h2>

                <div className="input1">
                    <input className='check' type="checkbox" name="" id="" />
                    <h4>Individual</h4>
                    
                    
                </div>

                <div className="input1">
                    
                    <input className='check' type="checkbox" name="" id="" />
                    <h4>Group</h4>
                
                
                </div>

                <h2>Purpose: </h2>

<div className="input1">
    <input className='check' type="checkbox" name="" id="" />
    <h4>Academic Counseling</h4>
    
    
</div>

<div className="input1">
    
    <input className='check' type="checkbox" name="" id="" />
    <h4>Emotional Support</h4>


</div>

<div className="input1">
    
    <input className='check' type="checkbox" name="" id="" />
    <h4>Career Guidance</h4>


</div>

<div className="input1">
    
    <input className='check' type="checkbox" name="" id="" />
    <h4>Behavioral Concerns</h4>


</div>

            

            </div>

            <div className="purpose">

            <h2>Select Date and Time </h2>

            <center><input className='date' type="date" name="" id="" /></center>
            <div className='but'>

            <div className="btns">
                <button>8 - 9:00 am</button>
                <button>9 - 10:00 am</button>
                <button>10 - 11:00 am</button>
            </div>
            <div className="btns">
            <button>1 - 2:00 pm</button>
                <button>2 - 3:00 pm</button>
                <button>3 - 4:00 pm</button>
            </div>

            </div>
            

            </div>

           

            </div>

            <button className='btn'>Confirm</button>
            
        </div>
        
      </div>

      
    

      </>

      
      
    );
  }

  


  
  export default Dashboard;
  