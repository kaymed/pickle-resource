import React from 'react'
import { Card, CardBody, CardTitle} from '@progress/kendo-react-layout'
import { Button } from '@progress/kendo-react-buttons'

export default function Intros() {
  return (
    <>
    <div className='k-card-deck'>
    <Card 
    style={{
        width: 250
      }}

      >
        <CardBody>
            <CardTitle><h1 className='text-[25px]'>Need a paddle?</h1></CardTitle>
                <p></p>
        </CardBody>
                 
                </Card>
    
                <Card 
    style={{
        width: 250
      }}
      
      >
        <CardBody>
            <CardTitle><h1 className='text-[25px]'>Pending Order</h1></CardTitle>
                <p>Order #10423 is being processed.</p>
                <p>
                            <strong>Estimated Delivery: Feb 25, 2025</strong>
                </p>
        </CardBody>
                 
                </Card>

                <Card 
    style={{
        width: 250
      }}
      
      >
        <CardBody>
            <CardTitle><h1 className='text-[25px]'>Pending Order</h1></CardTitle>
                <p>Order #10423 is being processed.</p>
                <p>
                            <strong>Estimated Delivery: Feb 25, 2025</strong>
                </p>
        </CardBody>
                 
                </Card>

                
      </div>
    </>
  )
}
