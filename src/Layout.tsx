import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "./AppBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    lightBulb: {
      verticalAlign: "middle",
      marginRight: theme.spacing(1),
    },
  })
);

export default function Layout(props: any) {
  const { children } = props;
  const classes = useStyles();
  return (
    <AppBar>
      {children}
    </AppBar>
  )
}
