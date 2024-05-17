// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 14"}
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
          "M3.262.83a6.494 6.494 0 017.649.956c-.478.478-.956 1.434-1.912 1.912a3.7 3.7 0 00-5.737 1.434 3.922 3.922 0 003.346 5.259c.956 0 1.912-.478 2.868-.478a3.733 3.733 0 011.912 1.912C8.042 14.693 2.305 13.737.87 9.435-1.041 6.565.393 2.74 3.26.83z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
