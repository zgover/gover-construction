import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card, { CardProps } from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia, { CardMediaProps } from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 245,
      maxWidth: '50%',
      paddingTop: '35%',
    },
  }),
);

interface Props extends CardProps {
  title: string
  subtitle?: string
  media: CardMediaProps
}

export default function MediaCard(props: Props) {
  const { title, subtitle, media, ...restProps } = props
  const classes = useStyles(props);
  
  return (
    <Card className={classes.root} {...restProps}>
      <CardMedia
        className={classes.cover}
        {...media}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {subtitle}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}