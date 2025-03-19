import React from 'react';
import './custom.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Paddles from './sections/Paddles';
import Coaches from './sections/Coaches';
import Reviews from './sections/Reviews';
import Tournaments from './sections/Tournaments';
import DrawerContainer from './sections/DrawerContainer';

import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from '@progress/kendo-react-common';
import { brightnessContrastIcon } from '@progress/kendo-svg-icons';

import Header from './sections/Header';
import Footer from './sections/Footer';


function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
  <>
  <div className={`${isDarkMode ? "dark" : ""}`}>    
  <div className='p-[10px] header-top'>

<Button 
  togglable={true} 
  selected={isDarkMode} 
  onClick={() => setIsDarkMode(!isDarkMode)} 
  themeColor={isDarkMode ? 'dark' : 'light'}>
    <SvgIcon 
      icon={brightnessContrastIcon}  /> 
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
              
             
              </div>
              </div>
          <div className={`${isDarkMode ? "dark" : ""}`}> 
          <Header/>
  <BrowserRouter>
  <div className='main-content'>
        <DrawerContainer>
            <Routes>
            <Route path="/" element={<Paddles />} />
                <Route path="/Coaches.jsx" element={<Coaches />} />
                <Route path="/Tournaments.jsx" element={<Tournaments />} />
                <Route path="/Reviews.jsx" element={<Reviews />} />
            </Routes>
        </DrawerContainer>
        </div>
        </BrowserRouter>
       
        </div>

        <Footer />
        </>
        )
};
export default App;