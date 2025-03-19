import React from 'react'
import { Typography } from '@progress/kendo-react-common'
import Grid from '../components/Grid'

export default function Tournaments() {
  return (
    
    <>
    <div className='tourney-content p-[30px]'>
   <Typography.h4>
    Ready for a tournament?
   </Typography.h4>
   <p>Now that you have a paddle and a coach, you're ready to try your hand at a tournament! Find local tournaments in your 
    area below.
   </p>

   <Grid />

                        
</div>
   
    </>
  )
}

