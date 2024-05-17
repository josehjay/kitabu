// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NoteBook1SvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NoteBook1SvgrepoComsvgIcon(
  props: NoteBook1SvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"#000"}
      viewBox={"0 0 24 24"}
      data-name={"Line Color"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon line-color"
      )}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"4"}
        y={"3"}
        width={"17"}
        height={"18"}
        rx={"1"}
        fill={"none"}
        stroke={"#000"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      ></rect>

      <path
        d={"M5 8H3m2 4H3m2 4H3m14-9H9v4h8z"}
        fill={"none"}
        stroke={"#2ca9bc"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default NoteBook1SvgrepoComsvgIcon;
/* prettier-ignore-end */
