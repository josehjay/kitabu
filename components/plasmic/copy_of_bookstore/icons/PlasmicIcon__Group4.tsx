// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
          "M4.588.432C9.37-1.48 14.15 3.3 13.188 8.08c-.96 4.78-7.649 7.17-11 3.824C-1.636 8.559-.202 1.388 4.578.432h.01zm1.434 2.39a4.723 4.723 0 00-3.346 3.346 3.659 3.659 0 003.824 4.3c1.912 0 3.824-1.434 3.824-3.346 0-2.388-2.389-4.778-4.3-4.3h-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
