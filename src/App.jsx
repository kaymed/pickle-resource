import React from 'react';
import './custom.css';
import '@progress/kendo-theme-default/dist/all.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './sections/NavBar'
import Homepage from './sections/Homepage';
import StepSection from './sections/StepSection';

import Header from './sections/Header';
import Footer from './sections/Footer';


function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
  <>
  <div className={`${isDarkMode ? "dark" : ""}`}>    
    <NavBar />
          <div className={`${isDarkMode ? "dark" : ""}`}> 
          <div className='m-[30px] flex header-area'><Header/></div>
    
    
    <div className='m-[100px] flex justify-center step-section'>
          <StepSection />
          </div>
        </div>
</div>

        <Footer />
        </>
        )
};
export default App;