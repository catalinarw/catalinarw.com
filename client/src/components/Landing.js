import React from 'react';
import Video from "../images/video3.mp4";
import logo from '../images/icon.png'
// import Gif from "../videos/gif.gif"
import Box from '@mui/material/Box';
import { Grid, Paper, Container, Switch } from '@mui/material';
import { height } from '@mui/system';
const Landing = () => {
    return (
        <>
        {/* // <Box > */}
             {/* <Paper > */}
            {/* <video autostart autoPlay loop src={Video} type="video/mp4" /> */}
            <img src={logo} alt='logo' />
            {/* </Paper> */}
         
        {/* </Box> */}
        </>
    )
}

export default Landing;