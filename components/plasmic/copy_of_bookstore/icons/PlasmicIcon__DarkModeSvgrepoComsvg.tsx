// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DarkModeSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DarkModeSvgrepoComsvgIcon(
  props: DarkModeSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 292.299 292.299"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M153.699 292.138C68.95 292.138 0 223.185 0 138.439 0 79.742 32.675 27.002 85.28.807a6.143 6.143 0 017.077 1.144 6.166 6.166 0 011.183 7.074C83.941 28.527 79.077 49.496 79.077 71.33c0 77.972 63.432 141.407 141.395 141.407 22.08 0 43.247-4.978 62.942-14.777a6.133 6.133 0 017.074 1.141 6.146 6.146 0 011.177 7.073c-26.055 53.021-78.927 85.964-137.966 85.964z"
        }
      ></path>
    </svg>
  );
}

export default DarkModeSvgrepoComsvgIcon;
/* prettier-ignore-end */