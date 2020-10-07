import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TelIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Mail';
import LogoIcon from './LogoIcon';
import { Icon } from '@material-ui/core';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: theme.palette.common.white
    },
    iconButton: {
      marginRight: theme.spacing(0.5),
    },
    icon: {
      color: '#c7aa8b'
    },
    title: {
      flexGrow: 1,
      lineHeight: 1
    },
  }),
);

export default function AppBar(props: any) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <HideOnScroll>
        <MuiAppBar>
          <Toolbar>
            <IconButton edge="start" className={classes.iconButton} href="/" size="small" color="inherit" aria-label="gover construction">
              <LogoIcon className={classes.icon} fontSize="large" />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              GOVER <span style={{color: '#c7aa8b'}}>CONSTRUCTION</span>
            </Typography>
            <IconButton href="tel:+15418153618" aria-label="call" title="Call Gover Construction LLC" color="inherit">
              <Icon component={TelIcon} color="inherit" fontSize="default"/>
            </IconButton>
            <IconButton href="mailto:info@gover.construction" aria-label="email" title="Email Gover Construction LLC" color="inherit">
              <Icon component={EmailIcon} color="inherit" fontSize="default"/>
            </IconButton>
          </Toolbar>
        </MuiAppBar>
      </HideOnScroll>
      <Toolbar />
      {props.children}
    </React.Fragment>
  );
}