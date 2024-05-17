// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 14"}
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
          "M0 .286h2.868v.956C3.824-.192 5.736-.192 7.649.286c-.478.956-.956 1.434-.956 2.39-1.912-.478-3.824.478-3.824 1.912v7.17C2.39 13.199.956 13.199 0 13.199V.286z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
