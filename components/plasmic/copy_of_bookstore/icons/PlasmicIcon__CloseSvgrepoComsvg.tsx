// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloseSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloseSvgrepoComsvgIcon(props: CloseSvgrepoComsvgIconProps) {
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

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M19.207 6.207a1 1 0 00-1.414-1.414L12 10.586 6.207 4.793a1 1 0 00-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 101.414 1.414L12 13.414l5.793 5.793a1 1 0 001.414-1.414L13.414 12l5.793-5.793z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CloseSvgrepoComsvgIcon;
/* prettier-ignore-end */
