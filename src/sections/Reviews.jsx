import * as React from 'react';
import { Stepper, Step } from '@progress/kendo-react-layout';
import { Typography } from '@progress/kendo-react-common';
import GoBack from '../components/GoBack'

<GoBack />

const stepsWithEmoji = [{
  label: 'Happy',
  emoji: '😀'
}, {
  label: 'Angry',
  emoji: '😠'
}, {
  label: 'Cool',
  emoji: '😎'
}, {
  label: 'Love',
  emoji: '😍'
}];
const StepWithEmoji = props => {
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
  const [value, setValue] = React.useState(2);
  const handleChange = e => {
    setValue(e.value);
  };
  return <React.Fragment>
        <div className="reviews">
          <Typography.h4>Leave us some love!</Typography.h4>
          <p>
            Did you find something useful in this guide? Well, great! We're happy to help.
            Let us know how you feel below. (Please be nice.)
          </p>
          <div className='p-[10px]'></div>
          <Stepper className="emoji-stepper" value={value} onChange={handleChange} items={stepsWithEmoji} item={StepWithEmoji} />
        </div>
       
       
      </React.Fragment>;
};
export default App;