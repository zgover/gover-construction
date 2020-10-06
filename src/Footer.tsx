import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from './Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

export default function Footer() {
  const [year] = React.useState(() => new Date().getFullYear())

  return (
    <Box pb={4} bgcolor="background.darkest" color="white">
      <Box py={3} mb={4} bgcolor="primary.light" textAlign="center">
        <Container maxWidth="lg">
          <Typography variant="h5" component="span">
            <Link color="inherit" underline="always" href="mailto:info@gover.construction" title="Email Gover Construction LLC">info@gover.construction</Link>
            <Box component="span" px={1}>{' | '}</Box>
            <Link color="inherit" underline="always" href="tel:+15418153618" title="Call Gover Construction LLC">+1 (541) 815-3618</Link>
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box fontSize={16}><strong>Gover Construction LLC</strong></Box>
            <br/>
            Redmond, Oregon<br/>
            Tel: +1 (541) 815-3618<br/>
            Email: info@gover.construction<br/>
            CCB: 231806<br/>
            <br/>
            <br/>
            <img src="/logos/logo-horizontal-white.svg" width={250} height={"auto"} alt="gover construction with logo icon"/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="overline"><b>Areas Served</b></Typography>
            <Typography>
              <ul>
                <li>Bend, OR</li>
                <li>Madras, OR</li>
                <li>Prineville, OR</li>
                <li>Redmond, OR</li>
                <li>Sisters, Oregon</li>
                <li>Terrebonne, OR</li>
                <li>Madras, OR</li>
                <li>...and more</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="overline"><b>Helpful Resources</b></Typography>
            <Typography>
              <ul>
                <li><Link color="inherit" href="https://www.oregon.gov/ccb/pages/buyer-beware.aspx" title="View the Oregon Construction Contractors Board buyer beware contractor list">CCB Buyer Beware</Link></li>
                <li><Link color="inherit" href="http://search.ccb.state.or.us/search/" title="View the Oregon Construction Contractors Board contractor search">CCB Contractor Search</Link></li>
                <li><Link color="inherit" href="https://www.oregon.gov/ccb/laws-rules/Pages/laws-rules.aspx" title="View the Oregon Construction Contractors Board laws and rules">CCB Laws &amp; Rules</Link></li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4} color="primary.light" textAlign="center">
          <Typography variant="caption" align="center">
            {'Copyright © '}{year}
            {' Gover Construction LLC. and/or its partners or subcontractors. All Rights Reserved.'}
            <br/><strong>{'CCB: 231806'}</strong>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
