import React from 'react';

import GoBack from '../components/GoBack';

import { Card } from '@progress/kendo-react-layout';
import { motion } from 'motion/react';
import proton from '../assets/images/paddle-1.png';
import grbx from '../assets/images/paddle-2.png';
import crbn from '../assets/images/paddle-3.png';
import PaddleItem from '../components/PaddleItem';

function Paddles() {
    
  return (
    <>
    <motion.div 
        initial={{ 
          transform: "translateY(-20px)",
          opacity: 0
          
    
         }}
        animate={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ type: "spring", delay: .3 }}>
          <div id='paddles'>
    <GoBack />
    <Card className='m-[20px]'><div className='m-[20px]'>
<h1 className='text-4xl mb-[10px]'> 
  Pick your paddle
</h1>
    <p className='text-lg'>Your perfect game starts with the perfect paddle. </p>
    </div></Card>

<div className="flex flex-row items-center">
<PaddleItem 
    src={proton}
    h3="Proton"
    p="Series Three"
    desc="🔥 More dwell time and control on your shots"

/>
<PaddleItem 
    src={crbn}
    h3="Carbon"
    p="CRBN-3 X-Series"
    desc="🔥 Spin Like Never Before"
    />

<PaddleItem 
    src={grbx}
    h3="Gearbox"
    p="Pro Ultimate"
    desc="🔥 Massive sweet spot for all-over response"
/>
</div>
    </div>
   
    </motion.div>
    </>
  )
}

export default Paddles