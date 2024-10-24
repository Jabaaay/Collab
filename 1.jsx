import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate(); // Use hook for navigation

  const handleLogin = () => {
    // Add your login logic here (authentication)
    navigate('/dashboard'); // Navigate to the dashboard after clicking login
  };

  return (
    <>
      <nav>
        <h1 className="buksu">Buksu Guidance</h1>
      </nav>

      <div className="card">
        <h1>Log In</h1>
        <div className="input">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={handleLogin}>Log In</button>
        </div>
      </div>
    </>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
    </div>
  );
}

export default function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
