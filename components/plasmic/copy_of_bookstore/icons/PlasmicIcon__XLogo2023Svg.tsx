// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type XLogo2023SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function XLogo2023SvgIcon(props: XLogo2023SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 300 271"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M236 0h46L181 115l118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123L-1.1 0h94.9l65.5 86.6zm-16.1 244h25.5L80.4 26H53z"
        }
      ></path>
    </svg>
  );
}

export default XLogo2023SvgIcon;
/* prettier-ignore-end */
