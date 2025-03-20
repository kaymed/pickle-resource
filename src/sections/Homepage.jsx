import * as React from 'react';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import { useNavigate } from 'react-router-dom';
import { userIcon, pencilIcon, calendarIcon } from '@progress/kendo-svg-icons';
import Hero from './Hero';
import Intros from './Intros';
import '../custom.css';
import '@progress/kendo-theme-default/dist/all.css';
import { motion } from 'motion/react';

export default function Homepage() {
  const navigate = useNavigate();
  
  return (
    <>
          <div className='m-[30px] flex header-area'>
            <Hero />
            </div>
<div className='flex'>
<motion.div 
    initial={{ 
      transform: "translateY(-20px)",
      opacity: 0
      

     }}
    animate={{ transform: "translateY(0px)", opacity: 1 }}
    transition={{ type: "spring", delay: .75 }}>


<ButtonGroup
  className=' text-[30px]'>
                <Button 
                togglable={true} 
                svgIcon={pencilIcon} 
                className='button-pr section-sel'
                onClick={() => navigate('/paddles')}>
                    Paddles
                </Button>
                <Button 
                togglable={true} 
                svgIcon={userIcon} 
                className='button-pr section-sel'
                onClick={() => navigate('/coaches')}>
                    Coaches
                </Button>
                <Button 
                togglable={true} 
                svgIcon={calendarIcon} 
                className='button-pr section-sel'
                onClick={() => navigate('/tournaments')}>
                    Tournaments
                </Button>
                
            </ButtonGroup>

            <Intros />


           </motion.div>
            </div>
         </>
  );
}