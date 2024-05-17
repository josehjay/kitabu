// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WebcamCamWebSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WebcamCamWebSvgrepoComsvgIcon(
  props: WebcamCamWebSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"16"}
        cy={"14"}
        r={"11"}
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
      ></circle>

      <circle
        cx={"16"}
        cy={"14"}
        r={"5"}
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
      ></circle>

      <circle
        cx={"16"}
        cy={"14"}
        r={"1"}
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
      ></circle>

      <path
        d={
          "M21.8 23.3l2.4 2.2c1.4 1.2.5 3.5-1.3 3.5H9.2c-1.8 0-2.7-2.2-1.3-3.5l2.4-2.2M22 9h0"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default WebcamCamWebSvgrepoComsvgIcon;
/* prettier-ignore-end */
