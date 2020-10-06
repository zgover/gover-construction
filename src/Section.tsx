import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, BoxProps, Container, ContainerProps } from '@material-ui/core';

type ClassKey = 'root' | 'lighBulb' | string
const useStyles = makeStyles<Theme, Props, ClassKey>((theme: Theme) =>
  createStyles({

  }), {name: 'Section'}
);

interface Props extends BoxProps {
  variant?: 't' | 'tan' | 'w' | 'white'
  ContainerProps?: ContainerProps
}

export default function Section(props: Props) {
  const classes = useStyles(props);
  const { variant, ContainerProps: cProps, children, ...rest } = props

  let bgcolor = 'white'
  
  switch(variant) {
    case 't':
    case 'tan':
      bgcolor = 'secondary.main'
      break
    case 'w':
    case 'white':
    default:
      bgcolor = 'white'
      break
  }

  return (
    <Box py={16} bgcolor={bgcolor} {...rest}>
      <Container maxWidth="lg" {...cProps}>
        {children as any}
      </Container>
    </Box>
  );
}
