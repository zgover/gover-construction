import { Box, Container, ContainerProps, createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";

const defaultImage =
  "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
type ClassKey =
  | "root"
  | "backgroundContainer"
  | "body"
  | "padded"
  | "backgroundImage"
  | "bgFlipped"
  | "overlay"
  | "overlayColor"
  | "overlayDarken";
const useStyles = makeStyles<Theme, Props, ClassKey>(
  (theme) =>
    createStyles({
      root: {
        color: theme.palette.common.white,
        display: "block",
        maxWidth: "100%",
        overflow: "hidden",
        position: "relative",
        minHeight: "20em",
      },
      backgroundContainer: {
        pointerEvents: "none",
        position: "absolute",
        zIndex: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: "hidden",
      },
      body: {
        position: "relative",
        zIndex: 5,

        "&$padded": {
          paddingTop: theme.spacing(4),
          paddingBottom: theme.spacing(6),
          [theme.breakpoints.up("lg")]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(8),
          },
        },
      },
      padded: {},
      backgroundImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        userSelect: "none",
        pointerEvents: "none",
        objectPosition: (props) =>
          `${props.horzPos || 50}% ${props.vertPos || 40}%`,
        opacity: (props) => props.opacity || 1,

        "&$bgFlipped": {
          transform: "scaleX(-1)",
        },
      },
      bgFlipped: {},
      overlay: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        content: '" "',
        opacity: 0.45,
      },
      overlayColor: {
        backgroundColor: ({ colorAccent = theme.palette.primary.main }) =>
          typeof colorAccent === "function" ? colorAccent(theme) : colorAccent,
        opacity: 0.25,
      },
      overlayDarken: {
        backgroundColor: ({ colorDarken = theme.palette.primary["dark"] }) =>
          typeof colorDarken === "function" ? colorDarken(theme) : colorDarken,
        opacity: 0.4,
      },
    }),
  { name: "SectionBackground" }
);

const SectionBackground = React.forwardRef<HTMLDivElement, Props>(
  function SectionBackground(props, ref) {
    const {
      component: Component = "div",
      className,

      vertPos = 40,
      horzPos = 50,
      opacity = 1,
      children,
      background = defaultImage,
      imgAlt,
      removeBackground = false,
      bgFlipped = false,
      overlay = false,
      imgProps,

      BackgroundBoxProps: bgProps = {},

      padded = false,
      contained = true,
      maxWidth = "xl",
      colorAccent,
      colorDarken,

      ...ComponentProps
    } = props;

    const classes = useStyles(props);
    const rootClass = clsx(classes.root, className || "");
    const bgClass = clsx(classes.backgroundContainer, bgProps.className || "");
    const bodyClass = clsx(classes.body, padded ? classes.padded : "");
    const overlayLayers = (
      <>
        <div className={clsx(classes.overlay, classes.overlayColor)} />
        <div className={clsx(classes.overlay, classes.overlayDarken)} />
      </>
    );
    const bgImage = (
      <>
        <img
          src={defaultImage}
          srcSet={background}
          alt={imgAlt ?? ""}
          {...imgProps}
          className={clsx(
            classes.backgroundImage,
            bgFlipped && classes.bgFlipped,
            imgProps && imgProps.className
          )}
        />
        {overlay && overlayLayers}
      </>
    );

    return (
      <Component className={rootClass} {...ComponentProps} ref={ref}>
        <Box
          component={"div"}
          bgcolor={"background.itsGettingDark"}
          children={!removeBackground && bgImage}
          {...bgProps}
          className={bgClass}
        />

        {contained ? (
          <Container maxWidth={maxWidth} className={bodyClass}>
            {children}
          </Container>
        ) : (
          <div className={bodyClass}>{children}</div>
        )}
      </Component>
    );
  }
);

type Props = {
  children: any;

  /**
   * @ignore
   */
  className?: string;

  /**
   * The url for the background image
   */
  background?: string;

  /**
   * The alt attribute value for the background image
   */
  imgAlt?: string;

  /**
   * The attributes to pass to the img element
   */
  imgProps?: any;

  /**
   * Wrap children inside a Container component
   */
  contained?: boolean;
  maxWidth?: ContainerProps['maxWidth']

  /**
   * Should add vertical gutters
   */
  padded?: boolean;

  /**
   * Vertical position of the background
   */
  vertPos?: number;

  /**
   * Horizontal position of the background
   */
  horzPos?: number;

  /**
   * The total opacity of the background
   */
  opacity?: number;

  /**
   * Flips the background horizontally
   */
  bgFlipped?: boolean;

  /**
   * Will show a themed overlay over the background image to make it
   * more readable
   */
  overlay?: boolean;

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component?: React.ComponentType;

  /**
   * Removes the background image
   */
  removeBackground?: boolean;

  /**
   * Background props to be passed to the background div element
   */
  BackgroundBoxProps?: object | any;

  /**
   * The color of the accent to overlay, can be function with param of theme
   */
  colorAccent?: string | Function;

  /**
   * The darkening color of to overlay, can be function with param of theme
   */
  colorDarken?: string | Function;
};
SectionBackground.displayName = 'SectionBackground'
export default SectionBackground;
