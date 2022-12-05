import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Navbar from './component/Navbar/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>
</BrowserRouter>
    
)
