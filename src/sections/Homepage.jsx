import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { useNavigate } from 'react-router-dom';
import { userIcon, pencilIcon, calendarIcon } from '@progress/kendo-svg-icons';
import Hero from './Hero';
import '../custom.css';
import '@progress/kendo-theme-default/dist/all.css';
import { motion } from 'motion/react';
import { Card, CardBody, CardTitle, CardActions } from '@progress/kendo-react-layout';

export default function Homepage() {
  const navigate = useNavigate();
  
  return (
    <>
          <div className='p-[30px] flex header-area'>
            <Hero />
            </div>
<div className='flex justify-center intro-section pb-[40px]'>
<motion.div 
    initial={{ 
      transform: "translateY(-20px)",
      opacity: 0
      

     }}
    animate={{ transform: "translateY(0px)", opacity: 1 }}
    transition={{ type: "spring", delay: .5 }}>

<div className='k-card-deck'>

<Card 
    style={{
        width: 290
      }}

      >
        <CardBody>
            <CardTitle><h1 className='text-[30px]'>🏓 Find your paddle</h1></CardTitle>
                <p className='text-lg'>Trying to find the perfect paddle? Use our quiz to help you in your search! </p>
        </CardBody>
        <CardActions>
        <Button 
                togglable={true} 
                svgIcon={pencilIcon} 
                className='button-pr section-sel'
                onClick={() => navigate('/paddles')}>
                    Take Quiz
                </Button>
        </CardActions>
                </Card>

                <Card 
    style={{
        width: 290
      }}

      >
        <CardBody>
            <CardTitle><h1 className='text-[30px]'>🎓Meet your coach</h1></CardTitle>
                <p className='text-lg'>Take a look at our recommendations for coaches in the area. </p>
        </CardBody>
        <CardActions>
        <Button 
                togglable={true} 
                svgIcon={userIcon} 
                className='button-pr section-sel'
                onClick={() => navigate('/coaches')}>
                    Coaches
                </Button>
        </CardActions>
                </Card>

                <Card 
    style={{
        width: 290
      }}

      >
        <CardBody>
            <CardTitle><h1 className='text-[30px]'>🥇 Nearby Tournaments</h1></CardTitle>
                <p className='text-lg'>Test your skills in tournaments to up your DUPR rating. </p>
        </CardBody>
        <CardActions>
        <Button 
                togglable={true} 
                svgIcon={calendarIcon} 
                className='button-pr section-sel'
                onClick={() => navigate('/tournaments')}>
                    Tournaments
                </Button>
                
        </CardActions>
                </Card>
                
     </div>          
           </motion.div>
            </div>
         </>
  );
}