import logo from './Skull.png';
import './App.css';
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Nav from './components/Nav';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import { Container } from '@material-ui/core';
import { Router } from "@reach/router";

const App = ({children}) => (
  <div>
      <Container>
        <Grid>
              <Grid item xs={12}>
                  <div>
                      <h1 className="maintext">Freelance Full-Stack Developer<br></br>based in Los Angeles California.</h1>
                  </div>
              </Grid>
        </Grid>
      </Container>
      </div>
);
  
  //   <Container id="navbar">
  //   <Grid>
  //       <AppBar id="appbar" position="static">
  //         {/* <Grid item xs={12}>
  //             <Button color="inherit"><Link to="/" class="navlink">Home</Link></Button>
  //             <Button color="inherit"><Link to="about" class="navlink">About</Link></Button>
  //             <Button color="inherit">Portfolio</Button> */}
  //             {/* <Button color="inherit"> <Link to="contact" class="navlink">Contact</Link></Button> */}
  //         {/* </Grid> */}
  //       </AppBar>
  //       <Hidden xsDown>
  //       <Box
  //         p={2}
  //         position="absolute"
  //         top={-8}
  //         left="5%"
  //       ><img id="logo" src={logo} alt="Logo" edge="start"/>
  //       </Box>
  //       </Hidden>
  //   </Grid>
  // </Container>
  //   // {/* <div className="App">
  //   //   <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       East Nashville Woodwork coming soon.
  //   //     </p>
  //   //   </header>
  //   // </div> */}
  // );

export default App;
