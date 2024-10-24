import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './dashboard.jsx'
import History from './history.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  <StrictMode>
  <Dashboard />
</StrictMode>,
<StrictMode>
  <History />
</StrictMode>,
)
