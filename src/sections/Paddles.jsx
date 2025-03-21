import React from 'react';

import GoBack from '../components/GoBack';
import PaddleDirectory from './PaddleDirectory';

import proton from '../assets/images/paddle-1.png';
import grbx from '../assets/images/paddle-2.png';
import crbn from '../assets/images/paddle-3.png';
import PaddleItem from '../components/PaddleItem';
import { Typography } from '@progress/kendo-react-common';

function Paddles() {
    
  return (
    <>
    <GoBack />
    <PaddleDirectory />
    </>
  )
}

export default Paddles