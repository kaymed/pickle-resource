import React from 'react'

import { useNavigate } from "react-router-dom";
import { Button } from '@progress/kendo-react-buttons';

export default function GoBack() {
    const navigate = useNavigate();

  return (
    <div className='m-[10px]'>
      <Button
      onClick={() => navigate(-1)}
      className="button-pr"
    >
      
      Go Back
    </Button>
    </div>
  )
}
