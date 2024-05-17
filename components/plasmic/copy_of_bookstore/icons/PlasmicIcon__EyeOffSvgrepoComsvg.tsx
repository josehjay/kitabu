// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EyeOffSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EyeOffSvgrepoComsvgIcon(props: EyeOffSvgrepoComsvgIconProps) {
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
        d={
          "M4.495 7.44a15.158 15.158 0 00-2.306 2.04 3.679 3.679 0 000 5.04C3.917 16.391 7.19 19 12 19c1.296 0 2.48-.19 3.552-.502l-1.662-1.663A10.77 10.77 0 0112 17c-4.033 0-6.812-2.18-8.341-3.837a1.68 1.68 0 010-2.326 12.972 12.972 0 012.273-1.96L4.495 7.442z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M8.533 11.478a3.5 3.5 0 003.983 3.983l-3.983-3.983zm6.933.969l-3.919-3.919a3.5 3.5 0 013.919 3.919z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M18.112 15.093a12.99 12.99 0 002.23-1.93 1.68 1.68 0 000-2.326C18.811 9.18 16.032 7 12 7c-.64 0-1.25.055-1.827.154L8.505 5.486A12.623 12.623 0 0112 5c4.811 0 8.083 2.609 9.81 4.48a3.679 3.679 0 010 5.04c-.58.629-1.334 1.34-2.263 2.008l-1.435-1.435zM2.008 3.422a1 1 0 111.414-1.414L22 20.586A1 1 0 1120.586 22L2.008 3.422z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EyeOffSvgrepoComsvgIcon;
/* prettier-ignore-end */
