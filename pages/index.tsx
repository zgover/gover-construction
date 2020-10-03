import React from 'react';
import Typography from '@material-ui/core/Typography';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Footer from '../src/Footer';
import SectionBackground from '../src/SectionBackground';
import Section from '../src/Section';

export default function Index() {
  return (
    <React.Fragment>  
      <SectionBackground
        background="/banners/modern-workshop.jpg"
        padded
        contained
        maxWidth="sm"
       >
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/about">
          Go to the about page
        </Link>
        <br/>
        <br/>
        <br/>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/about">
          Go to the about page
        </Link>
        <br/>
        <br/>
        <br/>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/about">
          Go to the about page
        </Link>
      </SectionBackground>
      <Section variant="tan">
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
      </Section>
      <Section>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
      </Section>
      <Footer />
    </React.Fragment>
  );
}
