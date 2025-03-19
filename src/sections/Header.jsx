import React, { useState } from 'react'
import '../index.css';
import Profile from '../components/Profile'
import { Typography } from '@progress/kendo-react-common';
import { StackLayout } from '@progress/kendo-react-layout';

function Header() {
        
  return (
    <>
    
    <div className='text-center'>
    <StackLayout orientation="vertical" align={{
            vertical: 'top'
          }}>
              
             <StackLayout 
             orientation="vertical" 
             align="center"
             style={{
              height: 200
            }}>

                <Typography.h1>
                 Want to up your Pickleball game?
                 </Typography.h1>
              <div className='pr-[250px] pl-[250px] text-center'>
                 <p className='text-2xl'>Just joined the pickleball craze and want to advance your skills? 
                    Look no further! Use the guide below to find your next best tool to add to your arsenal.
                    </p>
                     </div>

                     <div> <Profile /></div>
                </StackLayout>
            </StackLayout>
         
     </div>
      
     
    </>

  )
}

export default Header
 