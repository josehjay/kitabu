// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 14"}
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
          "M0 .264h2.868v.956c1.434-1.912 4.781-1.434 6.693.478 2.39-2.868 7.171-1.912 8.127 1.434.478 2.868 0 6.215 0 9.083 0 .956-1.434.956-2.868.956 0-2.868.478-5.737 0-8.6a2.187 2.187 0 00-4.3 0v8.6H7.652c.08-3.035-.08-6.072-.478-9.083-.478-1.912-3.824-1.434-3.824.478a51.963 51.963 0 00-.478 8.6H0V.264z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
