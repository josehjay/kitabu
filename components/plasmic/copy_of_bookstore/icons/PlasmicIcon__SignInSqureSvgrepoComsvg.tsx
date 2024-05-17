// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SignInSqureSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SignInSqureSvgrepoComsvgIcon(
  props: SignInSqureSvgrepoComsvgIconProps
) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.819 3.668c-.856.021-1.99.207-3.641.483l-1.671.278c-.824.138-1.35.227-1.734.342-.358.106-.472.201-.536.277-.064.075-.14.203-.185.574C8.002 6.02 8 6.554 8 7.388v1.744a1 1 0 01-2 0V7.33c0-.758 0-1.418.067-1.955.072-.578.234-1.135.644-1.619.41-.484.932-.735 1.491-.901.519-.155 1.17-.263 1.918-.388l.058-.01 1.747-.29c1.557-.26 2.831-.473 3.845-.497 1.06-.026 2.018.145 2.816.82.797.675 1.123 1.593 1.272 2.642C20 6.136 20 7.427 20 9.006v5.988c0 1.579 0 2.87-.142 3.875-.15 1.049-.476 1.967-1.273 2.642-.797.675-1.756.846-2.815.82-1.014-.024-2.288-.237-3.845-.496l-1.805-.301c-.749-.125-1.4-.233-1.918-.388-.559-.166-1.081-.417-1.491-.901-.41-.484-.572-1.04-.644-1.62C6 18.09 6 17.43 6 16.672v-1.605a1 1 0 012 0v1.545c0 .835.002 1.369.052 1.767.046.37.121.499.185.574.064.076.178.17.536.277.384.115.91.204 1.734.342l1.671.278c1.652.276 2.785.462 3.64.483.829.02 1.21-.124 1.475-.347.264-.224.468-.577.584-1.397.12-.848.123-1.996.123-3.67V9.082c0-1.675-.002-2.823-.123-3.67-.116-.82-.32-1.174-.584-1.398-.264-.223-.646-.367-1.474-.347z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M11.293 8.293a1 1 0 000 1.414L12.586 11H4a1 1 0 100 2h8.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SignInSqureSvgrepoComsvgIcon;
/* prettier-ignore-end */
