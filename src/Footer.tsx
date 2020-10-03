import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { Box, Container, Link } from '@material-ui/core';
import ProTip from './ProTip';

export default function Footer() {
  return (
    <React.Fragment>
      <Box py={4} bgcolor="primary.dark" color="white">
        <Container maxWidth="sm">
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js with TypeScript example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
        </Container>

        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <MuiLink color="inherit" href="https://material-ui.com/">
            Your Website
          </MuiLink>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </React.Fragment>
  );
}
