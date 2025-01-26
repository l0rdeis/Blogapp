import React from 'react';
import { deepPurple } from '@mui/material/colors';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const primary = deepPurple[500];
  const buttonColor = deepPurple[200]; 

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: primary }} 
      >
        <Toolbar>
        <span>
            BlogAPP   
        </span>
         <div className="Navbar">
         <Link to='/'>
          <Button
            sx={{
              color: 'white', 
              backgroundColor: buttonColor, 
              '&:hover': {
                backgroundColor: deepPurple[300],
              },
            }}
          >
            Home
          </Button>
          </Link>  
          <Link to='/add-blog'>
          <Button
            sx={{
              color: 'white', 
              backgroundColor: buttonColor, 
              '&:hover': {
                backgroundColor: deepPurple[300],
              },
            }}
          >
            Add Blog page
          </Button>
          </Link>
         </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;