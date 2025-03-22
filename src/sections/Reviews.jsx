import * as React from 'react';
import { Stepper, Step } from '@progress/kendo-react-layout';
import GoBack from '../components/GoBack'

<GoBack />

const loveSteps = [{
  label: 'Good job!',
  emoji: '👍🏻'
}, {
  label: 'Grateful',
  emoji: '😊'
}, {
  label: 'Super Cool!',
  emoji: '🆒'
}, {
  label: 'Love',
  emoji: '🤟🏼'
}];
const LoveSteps = props => {
  return <Step {...props}>
        <span className="k-step-indicator" aria-hidden="true">
          <span className="emoji">{props.emoji}</span>
        </span>
        <span className="k-step-label">
          <span className="k-step-text">{props.label}</span>
        </span>
      </Step>;
};
const App = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = e => {
    setValue(e.value);
  };
  return <React.Fragment>
        <div className="reviews">
          <h2 className="text-3xl">Leave us some love!</h2>
          <p className='text-lg mt-[10px] mb-[20px]'>
            Did you find something useful in this guide? Well, great! We're happy to help.
            Let us know how you feel below. (Please be nice.)
          </p>
          <div className='p-[10px]'></div>
          <Stepper 
          className="love-stepper" 
          value={value} 
          onChange={handleChange} 
          items={loveSteps} 
          item={LoveSteps} />
        </div>
       
       
      </React.Fragment>;
};
export default App;