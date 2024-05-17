// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group7Icon(props: Group7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.27 6.498L.91.155A.533.533 0 00.157.91l5.981 5.965L.157 12.84a.533.533 0 10.752.754l6.36-6.342a.532.532 0 000-.754z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group7Icon;
/* prettier-ignore-end */
