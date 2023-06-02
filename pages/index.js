import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ricky Alves
          </Typography>
          <IconButton color="inherit" href="https://github.com/henriquesuper" target="_blank">
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com/in/rickyalves" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com/henriquesuper" target="_blank">
            <TwitterIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Hello, I'm Ricky Alves
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
