// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserAddSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserAddSvgrepoComsvgIcon(props: UserAddSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"12"}
        cy={"8"}
        r={"4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
      ></circle>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.327 15.076C12.889 15.026 12.445 15 12 15c-1.92 0-3.806.474-5.369 1.373-1.562.9-2.75 2.197-3.3 3.738a1 1 0 001.883.672c.362-1.01 1.183-1.967 2.415-2.676 1.014-.584 2.235-.957 3.529-1.07a3.005 3.005 0 012.169-1.961z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M18 14v8m4-4h-8"}
        stroke={"currentColor"}
        strokeWidth={"2.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default UserAddSvgrepoComsvgIcon;
/* prettier-ignore-end */
