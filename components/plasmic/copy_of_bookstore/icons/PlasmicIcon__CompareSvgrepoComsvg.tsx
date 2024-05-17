// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CompareSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CompareSvgrepoComsvgIcon(props: CompareSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 8a1 1 0 011-1h7.586L7.293 4.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L9.586 9H2a1 1 0 01-1-1zm21 7h-7.586l2.293-2.293a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L14.414 17H22a1 1 0 000-2z"
        }
      ></path>
    </svg>
  );
}

export default CompareSvgrepoComsvgIcon;
/* prettier-ignore-end */
