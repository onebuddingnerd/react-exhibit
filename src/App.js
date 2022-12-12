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

// package .json begore finagling for Box
// "react": "^18.2.0",

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
      <BottomNavigationAction label="Written Reviews" value="Written Reviews" icon={<ArticleIcon />} />
    </BottomNavigation>
    </div>
  );
}