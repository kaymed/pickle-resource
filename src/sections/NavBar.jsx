import React from 'react'
import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from '@progress/kendo-react-common';
import { brightnessContrastIcon } from '@progress/kendo-svg-icons';
import { GiPickle } from "react-icons/gi";


function NavBar() {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <>
      <div className='p-[10px] header-top flex justify-center'>
<div className='logo flex m-[20px]'>
<GiPickle />
<span className='font-[Mouse_Memoirs] text-4xl'>Pickle-Resource</span>
</div>
<Button 
  togglable={true} 
  selected={isDarkMode} 
  onClick={() => setIsDarkMode(!isDarkMode)} 
  themeColor={isDarkMode ? 'dark' : 'light'}>
    <SvgIcon 
      icon={brightnessContrastIcon}  /> 
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
              
             
              </div>
    </>
  )
}

export default NavBar
