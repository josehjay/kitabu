// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DividerHorizontalSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function DividerHorizontalSvgrepoComsvgIcon(
  props: DividerHorizontalSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 15 15"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M2 7.5a.5.5 0 01.5-.5h10a.5.5 0 010 1h-10a.5.5 0 01-.5-.5z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DividerHorizontalSvgrepoComsvgIcon;
/* prettier-ignore-end */
