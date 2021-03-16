import * as React from "react";
import { PlasmicFab, DefaultFabProps } from "./plasmic/minitwitter/PlasmicFab";
import { Link } from "react-router-dom";

interface FabProps extends DefaultFabProps {
  children?: never;
}

function Fab(props: FabProps) {
  return (
    <PlasmicFab
      {...props}
      root={{
        as: Link,
        props: {
          to: "/post",
        },
      }}
    />
  );
}

export default Fab;
