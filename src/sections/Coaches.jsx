import React from 'react'

import coachOne from '../assets/images/pb-male-ic.png';
import coachTwo from '../assets/images/pb-female-ic.png';
import coachThree from '../assets/images/pb-male2.png';

import Reviews from './Reviews'
import { Button } from '@progress/kendo-react-buttons';
import { Card, CardHeader, CardTitle, CardBody, CardImage, CardActions, CardSubtitle } from '@progress/kendo-react-layout';
import { Rating } from '@progress/kendo-react-inputs';
import { heartIcon } from '@progress/kendo-svg-icons';
import { motion } from 'motion/react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';

import { Typography } from '@progress/kendo-react-common';
import GoBack from '../components/GoBack';


export default function Coaches() {

    const [visible, setVisible] = React.useState(false);
    const toggleDialog = () => {
      setVisible(!visible);
    };

  return (
    
    <>
    <motion.div 
    initial={{ 
      transform: "translateY(-20px)",
      opacity: 0
      

     }}
    animate={{ transform: "translateY(0px)", opacity: 1 }}
    transition={{ type: "spring", delay: .3 }}>
    <div id="coaches" className='pb-[20px]'>
    <GoBack />
    <Card
        className='m-[20px]'
        >
    <div className='m-[20px]'>
        <h1 className='text-4xl mb-[10px]'>In need of a coach?</h1>
        <p className='text-lg'>Want to work with a coach to work on some new technique? Our highly skilled
            coaches can help you.
        </p>
        </div>
        </Card>
    <div className='gap-5 flex m-[20px]'>
    <div style={{
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: '20px',
    alignItems: 'center',
    width: '100%',
    padding: '20px'
  }}>
    
        <Card 
        orientation="horizontal" 
        style={{
            width: 420,
            minHeight: 400
    }}>
            <CardImage src={coachOne} />
                <div className="k-vbox">
                        <CardHeader>
                            <CardTitle><Typography.h5>Bob Madison</Typography.h5></CardTitle>
                           <CardSubtitle style={{ fontWeight: 500, fontSize: 15}}>$90 for weekly lessons</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <p>
                            🎓 7 years playing <br />
                            🔥97 Lessons<br />
                            🥇 Tournament Competitor
                            </p>
                            <p>
                            Meet the versatile coach who has made a name for himself in the world of Pickleball!  
                            Get ready to experience lightning in a bottle with this dynamic coach! </p>
                        <CardActions>
                        <Button 
                        type="button" 
                        onClick={toggleDialog} 
                        className='button-pr'>
                View Stats
            </Button>
            {visible && <div className='flex justify-center'>
                <Dialog 
                id='1'
                     width={400} height={350}
                    title={'Learn with Coach Bob'} 
                    onClose={toggleDialog}>
                        <p style={{ margin: '10px 0' }}><strong>Levels taught:<br /></strong>
                        Beginners, Intermediates</p>
                        <p>
                            <strong>Teaches:<br /></strong>
                            Kids, Teenagers, Adults, Seniors</p>
                    <p style={{ margin: '10px 0' }}><strong>Total Reviews: </strong>
                    <br />64</p>
                    <p>Average Rating:<br/><Rating defaultValue={4} svgIcon={heartIcon} svgIconOutline={heartIcon} /></p>
                    <DialogActionsBar>
                        <Button 
                        type="button" 
                        onClick={toggleDialog}
                        className='button-pr'>
                            Contact
                        </Button>
                    </DialogActionsBar>
                </Dialog></div>}
                        </CardActions>
                        </CardBody>
                        
            
                    </div>
                </Card>

                <Card 
        orientation="horizontal" 
        style={{
            width: 420,
            minHeight: 400
    }}>
            <CardImage src={coachTwo} />
                <div className="k-vbox">
                        <CardHeader>
                            <CardTitle><Typography.h5>Kate Deela</Typography.h5></CardTitle>
                           <CardSubtitle style={{ fontWeight: 500, fontSize: 15}}>$80 for weekly lessons</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                        <p>
                            🎓 5 years playing <br />
                            🔥80 Lessons<br />
                            🥇 Tournament Competitor / Winner
                            </p>
                           
                            <p>
                            PPR certified Pickleball coach with years of experience teaching the game she loves! 
                            Kate's mission is to guide you in honing your skills, both on the physical and mental fronts.
                            
                             </p>
                        <CardActions>
                        <Button className='button-pr'>
                Contact
            </Button>
            
                        </CardActions>
                        </CardBody>
                        
            
                    </div>
                </Card>

                <Card 
        orientation="horizontal" 
        style={{
            width: 420,
            minHeight: 400
    }}>
            <CardImage src={coachThree} />
                <div className="k-vbox">
                        <CardHeader>
                            <CardTitle><Typography.h5>Albert Varnett</Typography.h5></CardTitle>
                           <CardSubtitle style={{ fontWeight: 500, fontSize: 15}}>$75 for weekly lessons</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                        <p>
                            🎓 2 years playing <br />
                            🔥10 Lessons<br />
                            🥇 Tournament Winner
                            </p>
                            <p>
                            Albert brings a unique blend of passion and expertise to his pickleball coaching, 
                            having transitioned from a college tennis background. 
                            He’s excited to share his 
                            enthusiasm for pickleball with players of all types.</p>
                        <CardActions>
                        <Button className='button-pr'>
                Contact
            </Button>
                        </CardActions>
                        </CardBody>
                        
            
                    </div>
                </Card>

            
                

</div>    
    </div>
    <Card className="m-[20px]">
<Reviews />
</Card>
    </div>
    
    </motion.div>
    </>
  )
}

