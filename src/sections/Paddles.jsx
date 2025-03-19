import React from 'react';

import proton from '../assets/images/paddle-1.png';
import grbx from '../assets/images/paddle-2.png';
import crbn from '../assets/images/paddle-3.png';
import PaddleItem from '../components/PaddleItem';
import { Typography } from '@progress/kendo-react-common';

function Paddles() {
    
  return (
    <>
    <div className='m-[20px]'>
<Typography.h4> 
  Pick your paddle
</Typography.h4>
    <p>Your perfect game starts with the perfect paddle. </p>
</div>
    <div id="paddles" className='flex p-[20px]'>

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
    </>
  )
}

export default Paddles