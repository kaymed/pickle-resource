import React from 'react';
import './custom.css';
import '@progress/kendo-theme-default/dist/all.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './sections/NavBar'
import Paddles from './sections/Paddles';
import Coaches from './sections/Coaches';
import Reviews from './sections/Reviews';
import Tournaments from './sections/Tournaments';
import DrawerContainer from './sections/DrawerContainer';

import Header from './sections/Header';
import Footer from './sections/Footer';


function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
  <>
  <div className={`${isDarkMode ? "dark" : ""}`}>    
    <NavBar />
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
</div>
        <Footer />
        </>
        )
};
export default App;