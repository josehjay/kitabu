// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HotSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HotSvgrepoComsvgIcon(props: HotSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <path id={"Xnk30JDSqc1Wa"} d={"M-22 2.24h42V22h-42z"}></path>
      </defs>

      <clipPath id={"Xnk30JDSqc1Wb"}>
        <use xlinkHref={"#Xnk30JDSqc1Wa"} overflow={"visible"}></use>
      </clipPath>

      <path
        clipPath={"url(#Xnk30JDSqc1Wb)"}
        d={
          "M16.543 8.028c-.023 1.503-.523 3.538-2.867 4.327.734-1.746.846-3.417.326-4.979-.695-2.097-3.014-3.735-4.557-4.627-.527-.306-1.203.074-1.193.683.02 1.112-.318 2.737-1.959 4.378C4.107 9.994 3 12.251 3 14.517 3 17.362 5 21 9 21c-4.041-4.041-1-7.483-1-7.483C8.846 19.431 12.988 21 15 21c1.711 0 5-1.25 5-6.448 0-3.133-1.332-5.511-2.385-6.899-.347-.458-1.064-.198-1.072.375"
        }
      ></path>
    </svg>
  );
}

export default HotSvgrepoComsvgIcon;
/* prettier-ignore-end */
