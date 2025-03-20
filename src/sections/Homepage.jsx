import * as React from 'react';
import { ChipList } from '@progress/kendo-react-buttons';
import { GridLayout } from '@progress/kendo-react-layout';

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
    <div className='w-[300px]'>
    <GridLayout align={'horizontal'} 
    rows={[{
            height: 90
          }]} 
    cols={[{
            width: 90
          }, {
            width: 90
          }, {
            width: 90
          }]} gap={{
            rows: 40,
            cols: 1
          }}>
            
      <ChipList 
  defaultData={entries} 
  selection="multiple" />
    <ChipList 
  defaultData={entries} 
  selection="multiple" />
  <ChipList 
  defaultData={entries} 
  selection="multiple" />
    </GridLayout>
    </div></div>
    </>
  )
}
