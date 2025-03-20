import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuNavContainer from '../components/MenuNavContainer'
import Paddles from './Paddles'
import Coaches from './Coaches'
import Reviews from './Reviews'
import Tournaments from './Tournaments'

export default function StepSection() {
  return (
    <>
    
      <BrowserRouter>
        <MenuNavContainer>
            <Routes>
                <Route path="/paddles" element={<Paddles />} />
                <Route path="/coaches" element={<Coaches />} />
                <Route path="/tournaments" element={<Tournaments />} />
                <Route path="/reviews" element={<Reviews />} />
            </Routes>
        </MenuNavContainer>
        </BrowserRouter>;
    </>
  )
}
