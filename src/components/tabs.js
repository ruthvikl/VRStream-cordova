import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Tabs,Container,Paper} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InviteCard from './inviteCard'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // width: 500,
    margin:'5%',
  },
  paperContainer:{
    borderRadius:'10px'
  }
}));


// LectureTab.propTypes = {
//   lectureList:PropTypes.array,
// };
// LectureTab.defaultProps = {
//   lectureList:[],

// }


 const LectureTab = (props)=>{
   const {lectureList} = props;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  console.log(props);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className={classes.root}>
      <Paper position="static" color="default" className={classes.paperContainer}>
        <Tabs
          value={value}
          onChange={handleChange}
          style={{backgroundColor:'#edeffa'}}
          variant="fullWidth"
          
         
        >
          <Tab label="Join Class" {...a11yProps(0)} style={{backgroundImage:"linear-gradient(180deg, #59b860, #01ab98)",margin:'2%',borderRadius:'20px',color:'#fff'}}/>
          <Tab label="Meeting Code" {...a11yProps(1)}  style={{backgroundImage:"linear-gradient(180deg, #59b860, #01ab98)",margin:'2%',borderRadius:'20px',color:'#fff'}}/>
        </Tabs>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
           <Container style={{padding:'5% 0px 10px  0px',}}>
                <Typography align="left" style={{color:'#000'}}>
              You have been invited to :
            </Typography>

            {lectureList.map((item)=>(
                
                <InviteCard _id={item._id} name={item.name} streamid={item.streamid}/>
            ))}

            </Container>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
export default LectureTab;