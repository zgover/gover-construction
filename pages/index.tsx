import React from "react";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../src/MediaCard";
import Footer from "../src/Footer";
import SectionBackground from "../src/SectionBackground";
import Section from "../src/Section";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import LogoIcon from "../src/LogoIcon";
import projects from "../src/const/projects";
import Head from "next/head";

export default function Index() {
  const title = "Hire Us! Central Oregon Residential Contruction – Gover Construction";
  const description = "Central Oregon siding repair, roof replacement, flooring, interior remodeling, new building structures we got you covered from A to Z";
  const url = 'https://gover.construction/'
  const img = `${url}projects/IMG_1505.JPG`
  const favicon = `${url}favicon.ico`

  return (
    <React.Fragment>
      <Head>
        <title>
          Hire Us! Residential Contruction Contractor – Gover Construction
        </title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url}></meta>
        <meta property="og:image" content={img}></meta>
        <link rel="shortcut icon" type="image/x-icon" href={favicon} />
      </Head>

      <SectionBackground
        background="/banners/modern-workshop.jpg"
        padded
        contained
        maxWidth="lg"
      >
        <Box my={4}>
          <Typography variant="h1" component="h2" align="center">
            <Box fontWeight="fontWeightLight" letterSpacing={-5}>
              WE BUILD YOUR
            </Box>
            <Box fontWeight="fontWeightBold" letterSpacing={-5}>
              PEACE &amp; TRANQUILITY
            </Box>
          </Typography>
          <Box
            height={4}
            width={200}
            mx="auto"
            my={4}
            display="block"
            bgcolor="secondary.light"
          >
            &nbsp;
          </Box>
          <Typography align="center" variant="h6">
            <Box fontStyle="italic" fontFamily="serif">
              If it's solitude, reading nook, luxurious wardrobe, car garage,
              revamp or just retirement,
              <br />
              blissful serenity is awaiting...
            </Box>
          </Typography>
        </Box>
      </SectionBackground>
      <Section variant="tan">
        <Grid
          container
          direction="row-reverse"
          spacing={3}
          alignItems="center"
          justify="center"
        >
          <Grid item sm={3}>
            <Icon component={LogoIcon} style={{ fontSize: 180 }} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="h2" gutterBottom>
              MISSION OF EVERY PROJECT
            </Typography>
            <Typography variant="subtitle1">
              Our friendly, expert staff will work with you throughout the
              process to ensure that all your needs are being met. The result? A
              revived outdoor or indoor space that beautifies your
              environment—and is kind to your wallet!
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Typography variant="h2" align="center" gutterBottom>
          RECENT PROJECTS
        </Typography>
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={10} alignItems="center" justify="center">
          {projects.map((item, key) => (
            <Grid item xs={12} sm={6} key={key}>
              <MediaCard
                elevation={4}
                title={item.title}
                subtitle={item.subtitle}
                media={{
                  image: item.media.featured.src,
                  title: item.media.featured.title || item.title,
                  "aria-label":
                    item.media.featured.alt ||
                    item.media.featured.title ||
                    item.title,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Section>
      <Footer />
    </React.Fragment>
  );
}
