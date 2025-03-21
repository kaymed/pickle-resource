import React from 'react';
import { Card, CardTitle, CardBody } from '@progress/kendo-react-layout';
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
    <div className='gap-5 flex m-[20px]'>
    <div style={{
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: '20px',
    alignItems: 'center',
    width: '100%',
    padding: '20px'
  }}></div>
    <div className='k-card-deck'>
    <Card
      orientation="vertical" 
      style={{
          width: 350,
          minHeight: 550
  }}
    ><div className="k-vbox">
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
                y: 350
              }} positionMode="absolute" onClick={handleClick} />
              <CardTitle>
         <h2 className='text-4xl mb-[10px]'>{h3}</h2>
         </CardTitle></div>
         <CardBody>
      <p className='text-lg'>{p}</p>
      <p className='text-md'>{desc}</p>
      </CardBody>
      </div>
              </Card></div>
              </div>
      </>
  );
}

export default PaddleItem;
