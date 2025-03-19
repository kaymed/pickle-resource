import * as React from 'react';
import { ChipList, Chip } from '@progress/kendo-react-buttons';
import { Typography } from '@progress/kendo-react-common';
import { checkCircleIcon } from '@progress/kendo-svg-icons';

const data = [{
  text: 'Paddles',
  value: 'paddle',
  selectedIconSvg: checkCircleIcon,
}, {
  text: 'Coach',
  value: 'coach',
  selectedIconSvg: checkCircleIcon,
}, {
  text: 'First Tournament',
  value: 'tirstTournament',
  selectedIconSvg: checkCircleIcon,
}];
const App = () => {
  return <div>
    <div className='m-[20px]'>
            <Typography.h3>
              Build Your List
              </Typography.h3><p>
              Remove any items that you've added to your list, to keep track of what you need to go and purchase.</p>
              </div>

            <ChipList 
            selection="multiple" 
            themeColor="success"
            defaultData={data} 
            chip={props => 
            <Chip 
            selectedSvgIcon={props.dataItem.selectedIconSvg} {...props} />} 
            />
        </div>;
};
export default App;