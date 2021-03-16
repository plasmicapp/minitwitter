import * as React from "react";
import {
  PlasmicButton,
  DefaultButtonProps,
} from "./plasmic/minitwitter/PlasmicButton";

interface ButtonProps extends DefaultButtonProps {
  children?: never;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  return <PlasmicButton {...props} />;
}

export default Button;
