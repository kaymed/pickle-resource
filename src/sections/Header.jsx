import React, { useState } from 'react'
import '../index.css';
import Profile from '../components/Profile'
import { Typography } from '@progress/kendo-react-common';
import { StackLayout } from '@progress/kendo-react-layout';

import { motion } from "motion/react"

function Header() {
        
  return (
    <>
    <motion.div 
    initial={{ 
      transform: "translateY(-20px)",
      opacity: 0

     }}
    animate={{ transform: "translateY(0px)", opacity: 1 }}
    transition={{ type: "spring" }}>
    <div className='text-center mt-[30px]'>
    <StackLayout orientation="vertical" align={{
            vertical: 'top'
          }}>
              
             <StackLayout 
             orientation="vertical" 
             align="center"
             style={{
              height: 200
            }}>

                <h1 className='font-[Mouse_Memoirs] text-8xl'>
                 Get started in pickleball today!
                 </h1>
              <div className='pr-[250px] pl-[250px] pt-[20px] text-center'>
                 <p className='text-2xl'>Just joined the pickleball craze and want to advance your skills? 
                    Look no further! Use the guide below to find your next best tool to add to your arsenal.
                    </p>
                     </div>

                    
                </StackLayout>
            </StackLayout>
         
     </div>
      </motion.div>
     
    </>

  )
}

export default Header
 