import * as React from 'react';
import { ChipList } from '@progress/kendo-react-buttons';
import { CardSubtitle, GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';
import { Card, CardHeader } from '@progress/kendo-react-layout';

export default function Homepage() {
    const entries = [{
        text: 'Paddles',
        value: 'paddles',
        disabled: true
      }, {
        text: 'Coaches',
        value: 'Coaches',
        disabled: true
      }, {
        text: 'Partners',
        value: 'partners',
        disabled: true
      }];
  return (
    <>
    <div className='p-[10px] flex justify-center'>
    <div className='w-[650px]'>
    <GridLayout align={'horizontal'} >
            
      <ChipList 
      className='entry-chips'
  defaultData={entries} 
  selection="multiple" />
   
    </GridLayout>

          <div className='resource-steps'>
          <GridLayout align={'horizontal'} 
   >
          <GridLayoutItem>
          <Card 
          className='m-[20px]'>
            <CardSubtitle>Step 1</CardSubtitle>
          <CardHeader>HELLO</CardHeader>
          </Card>
          <Card
          className='m-[20px]'>
            <CardSubtitle>Step 1</CardSubtitle>
          <CardHeader>HELLO</CardHeader>
          </Card>
          </GridLayoutItem>
          
          </GridLayout>
          </div>
    </div></div>
    </>
  )
}
