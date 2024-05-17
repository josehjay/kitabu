// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LightModeSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LightModeSvgrepoComsvgIcon(
  props: LightModeSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"-1 0 19 19"}
      className={classNames("plasmic-default__svg", className, "cf-icon-svg")}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.866 10.052H1.277a.554.554 0 010-1.109h1.589a.554.554 0 010 1.109zm1.65-3.984a.552.552 0 01-.392-.162L3.001 4.782a.554.554 0 01.784-.784l1.123 1.124a.554.554 0 01-.392.946zm-1.123 9.09A.554.554 0 013 14.214l1.123-1.124a.554.554 0 01.784.784l-1.123 1.123a.552.552 0 01-.392.163zm9.568-5.66a4.453 4.453 0 11-4.454-4.454 4.453 4.453 0 014.454 4.453zM8.5 4.417a.554.554 0 01-.554-.555V2.275a.554.554 0 111.108 0v1.588a.554.554 0 01-.554.555zm0 12.856a.554.554 0 01-.554-.554v-1.588a.554.554 0 011.108 0v1.588a.554.554 0 01-.554.554zm3.984-11.206a.554.554 0 01-.392-.946l1.123-1.123a.554.554 0 01.784.783l-1.123 1.123a.551.551 0 01-.392.163zm1.123 9.09a.553.553 0 01-.392-.162l-1.123-1.123a.554.554 0 01.784-.784l1.123 1.124a.554.554 0 01-.392.946zm2.116-5.106h-1.589a.554.554 0 010-1.109h1.589a.554.554 0 010 1.109z"
        }
      ></path>
    </svg>
  );
}

export default LightModeSvgrepoComsvgIcon;
/* prettier-ignore-end */
