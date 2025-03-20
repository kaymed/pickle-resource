import React from 'react';
import './custom.css';
import '@progress/kendo-theme-default/dist/all.css';

import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import NavBar from './sections/NavBar'
import Paddles from './sections/Paddles';
import Coaches from './sections/Coaches';
import Homepage from './sections/Homepage';
import Tournaments from './sections/Tournaments'
import Footer from './sections/Footer';


function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
  <>
  <div className={`${isDarkMode ? "dark" : ""}`}>    
    <NavBar />
          <div className={`${isDarkMode ? "dark" : ""}`}> 
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/paddles" element={<Paddles />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/tournaments" element={<Tournaments />} />
        </Routes>
    </BrowserRouter>
        </div>
</div>

        <Footer />
        </>
        )
};
export default App;