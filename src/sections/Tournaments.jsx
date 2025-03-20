import React from 'react'
import { Typography } from '@progress/kendo-react-common'
import Grid from '../components/Grid'
import GoBack from '../components/GoBack'

export default function Tournaments() {
  return (
    
    <>
    <GoBack />
    <div className='tourney-content p-[30px]'>
   <Typography.h4>
    Ready for a tournament?
   </Typography.h4>
   <p>Now that you have a paddle and a coach, you're ready to try your hand at a tournament! Find local tournaments in your 
    area below. You can filter the tournaments via tournament type, such as Men's, Women's and so forth.
   </p>

   <Grid />

                        
</div>
   
    </>
  )
}

