import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArticleIcon from '@mui/icons-material/Article';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import BarChartIcon from '@mui/icons-material/BarChart';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import RenderItem from './RenderItem';
import { styled } from "@mui/material/styles";
import { Box } from "@material-ui/core";
import { Center } from 'devextreme-react/map';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('Word Cloud');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // const [password, setPassword] = React.useState('')

  // const handlePasswordChange = (password) => this.setState({ password });

  const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  &.Mui-selected {
    color: red;
  }
`);

  return (
    
      <div>
        
        <RenderItem valnav={value}> </RenderItem>
        <BottomNavigation sx={{ width: 1 }} value={value} onChange={handleChange}>
          <BottomNavigationAction 
            label="World Cloud" 
            value="Word Cloud"
            icon={<CloudQueueIcon />}
          />
          <BottomNavigationAction 
            label="Criteria Plotter"
            value="Criteria Plotter"
            icon={<BarChartIcon />}
          />
          <BottomNavigationAction
            label="Time Spent"
            value="Time Spent"
            icon={<HourglassEmptyIcon />}
          />
          <BottomNavigationAction 
            label="Written Reviews" 
            value="Written Reviews" 
            icon={<ArticleIcon />} />
        </BottomNavigation>
        <br></br>
        <h2><center><a href="https://onebuddingnerd.github.io"><img src={require("./data/home-material.png")}></img></a> <a href="https://onebuddingnerd.github.io/files/CV_online.pdf"><img src={require("./data/cv-material.png")}></img></a> <a href="https://github.com/onebuddingnerd"><img src={require("./data/github-material.png")}></img></a> </center></h2>
      </div>
  );
}