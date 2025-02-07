// Hero.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import './Hero.css';

const Hero = () => {
    return (
        <Box id="home" className="hero" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, pt: 15 }}>
            <Typography variant="h2" align="center" sx={{ fontSize: '90px', fontWeight: 600 }}>
                <span>I'm Reena Shareef,</span>
                Software Developer Intern at Infomatics
            </Typography>
            <Typography variant="body1" align="center" sx={{ width: '50%', fontSize: '24px', lineHeight: '40px' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, in vero minus sequi fugit nihil.
            </Typography>
            {/* More content */}
        </Box>
    );
};

export default Hero;
