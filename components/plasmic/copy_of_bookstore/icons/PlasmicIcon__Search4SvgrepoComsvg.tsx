// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Search4SvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Search4SvgrepoComsvgIcon(props: Search4SvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -0.5 25 25"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        clipRule={"evenodd"}
        d={
          "M5.5 11.146a6.144 6.144 0 1112.288-.002 6.144 6.144 0 01-12.288.002z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M15.989 15.49l3.511 3.511"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Search4SvgrepoComsvgIcon;
/* prettier-ignore-end */
