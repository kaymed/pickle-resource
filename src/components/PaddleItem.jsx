import React from 'react';
import { Card, CardHeader, CardTitle, CardBody, CardImage } from '@progress/kendo-react-layout';
import { FloatingActionButton } from '@progress/kendo-react-buttons';
import { checkIcon } from '@progress/kendo-svg-icons';

function PaddleItem({ src, h3, p, desc }) {
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
    <Card
      orientation="vertical" 
      style={{
          width: 400,
          minHeight: 550
  }}
    >
      <FloatingActionButton 
        text={added ? 'Added!' : 'Add to My List'} 
        size="small"
        themeColor={added ? 'success' : 'tertiary'}
        svgIcon={added ? checkIcon : undefined} 
        
        align={{
                horizontal: 'end',
                vertical: 'top'
              }} alignOffset={{
                y: 485
              }} positionMode="absolute" onClick={handleClick} />
      <img className="k-card-media" src={src} alt={`${h3} paddle`} />
        
      
          <CardTitle>
         <h2 className='text-4xl m-[20px]'>{h3}</h2>
         </CardTitle>
         <CardBody>
          
      <p className='text-lg'>{p}</p>
      <p className='text-md'>{desc}</p>
      </CardBody>
     
              </Card>
      </>
  );
}

export default PaddleItem;
