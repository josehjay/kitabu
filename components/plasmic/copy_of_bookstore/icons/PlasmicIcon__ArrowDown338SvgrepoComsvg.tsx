// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDown338SvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDown338SvgrepoComsvgIcon(
  props: ArrowDown338SvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -4.5 20 20"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.292.366c-.39.405-.39 1.06 0 1.464l8.264 8.563c.78.81 2.047.81 2.827 0l8.325-8.625c.385-.4.39-1.048.01-1.454a.976.976 0 00-1.425-.011l-7.617 7.893a.975.975 0 01-1.414 0L1.705.366a.974.974 0 00-1.413 0"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default ArrowDown338SvgrepoComsvgIcon;
/* prettier-ignore-end */
