import * as React from "react";
import {
  PlasmicButtonSec,
  DefaultButtonSecProps
} from "./plasmic/copy_of_bookstore/PlasmicButtonSec";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface ButtonSecProps extends DefaultButtonSecProps {
  // Feel free to add any additional props that this component should receive
}
function ButtonSec_(props: ButtonSecProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButtonSec.useBehavior<ButtonSecProps>(
    props,
    ref
  );
  return <PlasmicButtonSec {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<ButtonSecProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ButtonSecProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const ButtonSec = React.forwardRef(ButtonSec_) as any as ButtonComponentType;

export default Object.assign(ButtonSec, { __plumeType: "button" });
