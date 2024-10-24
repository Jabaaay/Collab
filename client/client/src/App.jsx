import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import logo from './assets/1.png';
import Dashboard from './dashboard';  

function Login() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const handleLogin = () => {

    navigate('/dashboard');  
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </nav>

      <div className="card">
        <h1>Log In</h1>
        <div className="input">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={handleLogin}>Log In</button> {/* Click triggers navigation */}
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />} />  
      </Routes>
    </Router>
  );
}

export default App;
