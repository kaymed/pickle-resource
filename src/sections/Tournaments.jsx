import React from 'react'
import TournamentGrid from '../components/TournamentGrid'
import GoBack from '../components/GoBack'
import { Card } from '@progress/kendo-react-layout'
import { motion } from 'motion/react'


export default function Tournaments() {
  return (
    
    <>
    <motion.div 
    initial={{ 
      transform: "translateY(-20px)",
      opacity: 0
      

     }}
    animate={{ transform: "translateY(0px)", opacity: 1 }}
    transition={{ type: "spring", delay: .1 }}>
    <GoBack />
   <Card className='m-[20px]'> <div className='tourney-content p-[30px]'>
   <h1 className='text-4xl mb-[10px]'>
   🥇  Ready for a tournament?
   </h1>
   <p className='text-lg mb-[30px]'>Now that you have a paddle and a coach, you're ready to try your hand at a tournament! Find local tournaments in your 
    area below. You can filter the tournaments via tournament type, such as Men's, Women's and so forth.
   </p>

   <TournamentGrid />

                        
</div>
</Card>
</motion.div>
    </>
  )
}

