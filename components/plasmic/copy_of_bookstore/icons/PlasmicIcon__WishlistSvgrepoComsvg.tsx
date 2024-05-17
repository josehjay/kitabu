// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WishlistSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WishlistSvgrepoComsvgIcon(
  props: WishlistSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 64 64"}
      strokeWidth={"3"}
      stroke={"currentColor"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.06 25c-1.38-7.7 3.72-14.37 11.67-15 7-.55 10.47 7.93 11.17 9.55a.13.13 0 00.25 0c3.25-8.91 9.17-9.29 11.25-9.5 5.6-.6 13.11 3.73 11.6 13.82-2.16 14-23.12 29.81-23.12 29.81S11.79 40.05 9.06 25z"
        }
      ></path>
    </svg>
  );
}

export default WishlistSvgrepoComsvgIcon;
/* prettier-ignore-end */
