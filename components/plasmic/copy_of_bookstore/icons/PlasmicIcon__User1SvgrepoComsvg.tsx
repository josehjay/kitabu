// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type User1SvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function User1SvgrepoComsvgIcon(props: User1SvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 11a5 5 0 10-5-5 5.006 5.006 0 005 5zm0-8a3 3 0 11-3 3 3 3 0 013-3zM3 22a9 9 0 0118 0 1 1 0 01-2 0 7 7 0 00-14 0 1 1 0 01-2 0z"
        }
      ></path>
    </svg>
  );
}

export default User1SvgrepoComsvgIcon;
/* prettier-ignore-end */
