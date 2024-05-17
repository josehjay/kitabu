// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 24"}
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
          "M3.7 2.235a9.117 9.117 0 0112.909.956 9.549 9.549 0 01.478 12.908l-7.171 7.17c-1.434-.955-3.824-2.867-2.868-4.78 1.912-2.39 4.3-4.3 6.215-6.693 1.434-1.912.478-5.737-2.39-6.215a3.982 3.982 0 00-5.26 4.3c0 2.39 1.913 3.824 3.347 5.259-1.434 1.434-3.346 2.39-3.346 4.3C4.18 17.528 1.79 16.094.833 13.703A9.577 9.577 0 013.7 2.235z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
