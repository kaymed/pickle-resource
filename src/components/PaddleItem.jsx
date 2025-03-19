import React from 'react';
import { Card, CardTitle } from '@progress/kendo-react-layout';
import { FloatingActionButton } from '@progress/kendo-react-buttons';
import { checkIcon } from '@progress/kendo-svg-icons';

function PaddleItem({ src, h3, p }) {
  const [added, setAdded] = React.useState(false);
      const handleClick = () => {
        setAdded(!added);
      };

  const [state, setState] = React.useState({
        success: false,
      
      });
      const onToggle = flag => setState({
        ...state,
        [flag]: !state[flag]
      });
      const {
        success
      } = state;
      
  return (
    <>
    <Card>
      <img className="k-card-media" src={src} alt={`${h3} paddle`} />
      <div className="k-card-body">
        <FloatingActionButton 
        text={added ? 'Added!' : 'Add to My List'} 
        size="small"
        themeColor={added ? 'success' : 'tertiary'}
        svgIcon={added ? checkIcon : undefined} 
        
        align={{
                horizontal: 'end',
                vertical: 'top'
              }} alignOffset={{
                y: 300
              }} positionMode="absolute" onClick={handleClick} />


              <CardTitle>
         <h3 className='pb-[10px]'>{h3}</h3>
         </CardTitle>
      <p>{p}</p>
      
      </div>
              </Card>
      </>
  );
}

export default PaddleItem;
