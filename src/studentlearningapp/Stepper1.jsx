import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 
import Step2 from './Step2';
import Step3 from './Step3';
import { Container } from 'react-bootstrap';
import { Card, Toolbar } from '@mui/material';
import Datatypes from './Datatypes';
import ConditionalStatemnets from './ConditionalStatemnets';
import Variables from './Variables';
import Loops from './Loops';
import ResponsiveDrawer from './Slidebarfn2';
import ResponsiveDrawer1 from './Slidebarfn1';
import ResponsiveDrawer2 from './Slidebarfn3';
import ResponsiveDrawer3 from './Slidebarfn4';
import ResponsiveDrawer4 from './Slidebarfn5';

const steps = ['Understanding Basic Programming Concepts','Learning a Programming Language', 'Understanding Algorithms & Data Structures', 'Building Simple Programs','Building Complex Programs'];

export default function HorizontalLinearStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  console.log(props.activeStep)

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container className="content_contianer_box">
      {/* <Toolbar/> */}

     
    <Box sx={{ position:"sticky" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step    key={label} {...stepProps} className="content_contianer_box1">
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
      {activeStep === steps.length ? (
        <React.Fragment >
          <Typography className='final' sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
            <br/>
            <br/>
            <br/>
            <h3> Thanks For Watching</h3>
            <br/>
            <br/>
            <h6> Happy  Coding</h6>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2,height:300 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <div>
            <Button sx={{backgroundColor:"blue",color:"white"}}   onClick={handleReset}>Reset</Button>
            </div>
          </Box>
        </React.Fragment>
      ) : (
        <div >
        
          {activeStep===0?<ResponsiveDrawer1/>:""}
          {activeStep===1?<ResponsiveDrawer/>:""}
          {activeStep===2?<ResponsiveDrawer2/>:""}
          {activeStep===3?<ResponsiveDrawer3/>:""}
          {activeStep===4?<ResponsiveDrawer4/>:""}
          {/* {activeStep===2?<Datatypes/>:""}
           {activeStep===1?<Typography sx={{ mt: 2, mb: 1 }}><Step2/> {activeStep + 1}</Typography>:''}
          {activeStep===2?<Typography sx={{ mt: 2, mb: 1 }}><Step3/> {activeStep + 1}</Typography>:''}   */}
          
          <Box  sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 ,marginLeft:20,backgroundColor:"blue",color:"white!important"}}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 ,color:'white',backgroundColor:'blue'}}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext} sx={{marginRight:20,backgroundColor:"blue",color:"white!important"}}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </div>
      )}
    </Box>
    </Container>
  );
}