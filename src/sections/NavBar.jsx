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
<span className='font-[Mouse_Memoirs] text-4xl'>Pickle Resource</span>
</div>
<div className='pt-[20px]'><Button 
  fillMode='solid'
  className='button-pr'
  togglable={true} 
  selected={isDarkMode} 
  onClick={() => setIsDarkMode(!isDarkMode)} 
  themeColor={isDarkMode ? 'dark' : 'base'}>
    <SvgIcon 
      icon={brightnessContrastIcon}  /> 
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
              
             
              </div></div>
    </>
  )
}

export default NavBar
