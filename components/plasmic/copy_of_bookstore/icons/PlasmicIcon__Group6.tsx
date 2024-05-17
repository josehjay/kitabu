// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group6Icon(props: Group6IconProps) {
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
          "M.336 9.083C-1.096 4.781 2.248 0 6.551 0a7.636 7.636 0 017.171 6.215v7.171c-1.434 0-2.39 0-3.346-.956-3.346 2.39-8.6.478-10.039-3.346v-.001zm6.215-6.215a4.2 4.2 0 00-2.868 6.215c1.912 2.39 5.737 1.912 6.693-.478a4.214 4.214 0 00-3.825-5.737z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
