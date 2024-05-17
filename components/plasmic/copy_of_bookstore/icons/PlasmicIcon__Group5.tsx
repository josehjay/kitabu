// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5Icon(props: Group5IconProps) {
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
          "M0 .217h2.868v.956a6.584 6.584 0 018.6.956A6.233 6.233 0 0111 11.213c-1.912 2.39-5.737 2.39-8.127.956v4.3C2.395 17.901.961 17.901.005 17.901V.218H0zm6.215 2.39c-2.868.478-4.3 3.824-2.868 5.737 1.434 2.39 5.259 2.39 6.215 0 1.911-2.39-.479-5.737-3.347-5.737z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
