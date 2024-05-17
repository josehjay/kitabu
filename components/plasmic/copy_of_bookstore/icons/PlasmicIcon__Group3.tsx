// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 18"}
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
          "M10.342 1.032C10.82-.402 12.254.076 13.21.076V17.76h-2.868v-1.43a6.474 6.474 0 01-8.127 0 6.8 6.8 0 01-.478-9.56 6.584 6.584 0 018.6-.957l.005-4.78zm-4.3 6.215c-2.39.478-4.3 3.825-2.39 6.216a3.6 3.6 0 006.215-.478c1.431-2.391-.96-5.739-3.828-5.739l.003.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
