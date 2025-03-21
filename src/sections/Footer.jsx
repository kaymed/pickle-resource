import React from 'react'
import { AppBar} from '@progress/kendo-react-layout';

export default function Footer() {
  return (
    <>
    <div>
       <AppBar 
    position={'bottom'} 
    themeColor={'dark'}
       >
                           
    <div className='justify-center'>
     <p>
      Made with ❤️ by Kay M.
      </p>
   </div>
  

 </AppBar>
 </div>
    </>
  )
}
