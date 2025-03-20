import React from 'react';

import GoBack from '../components/GoBack';
import proton from '../assets/images/paddle-1.png';
import grbx from '../assets/images/paddle-2.png';
import crbn from '../assets/images/paddle-3.png';
import PaddleItem from '../components/PaddleItem';
import { Typography } from '@progress/kendo-react-common';

function Paddles() {
    
  return (
    <>
    <GoBack />
    <div id="paddles" className='m-[20px] w-[800px] flex flex-col'>
<h1> 
  Pick your paddle
</h1>
    <p>Your perfect game starts with the perfect paddle. </p>

    <div className='flex'>

<div className="flex flex-row m-[10px] items-center">
<PaddleItem 
    src={proton}
    h3="Proton"
    p="Series Three- Project Flamingo"

/>
<PaddleItem 
    src={crbn}
    h3="Carbon"
    p="CRBN-3 X-Series Carbon Fiber Paddle"
    
    />

<PaddleItem 
    src={grbx}
    h3="Gearbox"
    p="Pro Ultimate Power 14mm"

/>
</div>
    </div>
    </div>
    </>
  )
}

export default Paddles