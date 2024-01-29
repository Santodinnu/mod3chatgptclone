import React from 'react'
import { Box, Typography, Link } from "@mui/material";
import { purple } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (


    <Box
    width={"100%"}
    p="1rem 6%"
    textAlign={"center"}
    sx={{ boxShadow: 3, mb: 2, bgcolor: 'purple', color:'white' }}
  >
    <Typography variant='h1' color={'white'} fontWeight={'bold'}>
      AI GPT Clone
    </Typography>
    <NavLink to ='/register' p={1}>Sign Up</NavLink>
    <NavLink to ='/login' p={1}>Sign In</NavLink>
      
    </Box>
      
   
  )
}

export default Navbar
