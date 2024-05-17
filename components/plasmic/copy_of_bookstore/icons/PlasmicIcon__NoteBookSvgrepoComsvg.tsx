// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NoteBookSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NoteBookSvgrepoComsvgIcon(
  props: NoteBookSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 800 800"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"133.33"}
        y={"100"}
        width={"566.67"}
        height={"600"}
        rx={"33.33"}
        ry={"33.33"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"66.67"}
      ></rect>

      <path
        d={
          "M166.67 266.67H100M166.67 400H100m66.67 133.33H100m466.67-300H300v133.33h266.67V233.33z"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"66.67"}
      ></path>
    </svg>
  );
}

export default NoteBookSvgrepoComsvgIcon;
/* prettier-ignore-end */
