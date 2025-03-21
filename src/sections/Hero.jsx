import React, { useState } from 'react'
import '../index.css';
import Profile from '../components/Profile'

import { Button } from '@progress/kendo-react-buttons';
import { StackLayout } from '@progress/kendo-react-layout';

import { motion } from "motion/react"

function Hero() {
        
  return (
    <>
    
    <motion.div 
    initial={{ 
      transform: "translateY(-20px)",
      opacity: 0
      

     }}
    animate={{ transform: "translateY(0px)", opacity: 1 }}
    transition={{ type: "spring", delay: .3 }}>
    <div className='text-center mt-[40px]'>
    <StackLayout orientation="vertical" align={{
            vertical: 'top'
          }}>
              
             <StackLayout 
             orientation="vertical" 
             align="center"
             style={{
              height: 200
            }}>

                <h1 className='font-[Mouse_Memoirs] text-6xl'>
                 Get started in pickleball today!
                 </h1>
              <div className='pr-[250px] pl-[250px] pt-[20px] text-center'>
                 <p className='text-2xl'>Just joined the pickleball craze and can't get enough? 
                    Look no further! Use the guide below to find your next best paddle, a coach or a local
                    tournament to test your skills.
                    </p>
                     </div>

                  <div> 
                    
                  </div> 
                </StackLayout>
            </StackLayout>
         
     </div>
      </motion.div>
     
    </>

  )
}

export default Hero
 