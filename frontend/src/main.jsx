import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import UserContext from '../context/userContext.jsx'
UserContext
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>  <BrowserRouter>
    
    <App />
    </BrowserRouter></UserContext>
   
  </StrictMode>,
)
