import React from 'react'
import { AiTwotoneHeart } from "react-icons/ai";
import { AppBar} from '@progress/kendo-react-layout';

export default function Footer() {
  return (
    <>
       <AppBar 
    position={'bottom'} 
    themeColor={'dark'}
  >
                           
 <div className='flex gap-5 items-center'>
     <p className='text-center'>
       <div className='flex'> Made with <div className='flex p-[3px]'> <AiTwotoneHeart /> </div>by Kay M.</div> 
          </p>
                   
              
   </div>

               
 </AppBar>
    </>
  )
}
