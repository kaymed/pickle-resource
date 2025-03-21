import React from 'react';
import './custom.css';
import '@progress/kendo-theme-default/dist/all.css';

import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import Paddles from './sections/Paddles';
import Coaches from './sections/Coaches';
import Homepage from './sections/Homepage';
import Tournaments from './sections/Tournaments'
import Footer from './sections/Footer';

import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from '@progress/kendo-react-common';
import { brightnessContrastIcon } from '@progress/kendo-svg-icons';
import { GiPickle } from "react-icons/gi";
import { motion } from 'motion/react';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <>
  <div className={`${isDarkMode ? "dark" : ""}`}> 
    <motion.div 
    initial={{ 
      transform: "translateY(-20px)",
      opacity: 0

     }}
    animate={{ transform: "translateY(0px)", opacity: 1 }}
    transition={{ type: "spring", delay: 0 }}>

      <div className='p-[10px] header-top flex justify-center'>
<div className='logo flex m-[20px]'>
<GiPickle />
<span className='font-[Mouse_Memoirs] text-4xl'>Pickle Resource</span>
</div>
<div className='pt-[20px]'>
  <Button 
  fillMode='solid'
  className='button-pr'
  togglable={true} 
  selected={isDarkMode} 
  onClick={() => setIsDarkMode(!isDarkMode)} 
  themeColor={isDarkMode ? 'dark' : 'base'}>
    <SvgIcon 
      icon={brightnessContrastIcon}  /> 
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
              
             
              </div></div></motion.div>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/paddles" element={<Paddles />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/tournaments" element={<Tournaments />} />
        </Routes>
    </BrowserRouter>
</div>

        <Footer />
        </>
        )
};
export default App;