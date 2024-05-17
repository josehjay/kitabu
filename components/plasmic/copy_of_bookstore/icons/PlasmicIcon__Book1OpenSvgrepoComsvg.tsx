// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Book1OpenSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Book1OpenSvgrepoComsvgIcon(
  props: Book1OpenSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 32 32"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30.879 5.111A1.247 1.247 0 0030 4.75h-.014l-2.736.028V2c0-.346-.141-.659-.367-.886a1.465 1.465 0 00-.885-.364h-.004a13.76 13.76 0 00-10.011 3.376l.016-.014A13.744 13.744 0 005.96.753l.043-.002a1.042 1.042 0 00-.885.363l-.001.001c-.227.226-.368.54-.368.886v2.778l-2.737-.028h-.031c-.337 0-.642.138-.86.362a1.247 1.247 0 00-.371.889v24a1.249 1.249 0 001.846 1.097l-.007.003a12.594 12.594 0 016.408-1.73c2.353 0 4.556.638 6.448 1.751l-.06-.032c.034.016.078.032.122.046l.009.002c.048.023.106.045.166.063l.009.002c.018.005.034.016.052.019l.002.002h.006c.031.006.062.012.093.016h.004l.005.002c.041.005.088.008.136.008h.013c.042 0 .084-.002.126-.006h.002c.061-.007.114-.017.166-.029l-.01.002h.003c.015-.004.029-.013.044-.017a1.19 1.19 0 00.135-.053l-.008.003c.061-.02.112-.04.16-.063l-.008.003A12.581 12.581 0 0123 29.371c2.361 0 4.572.643 6.468 1.764l-.059-.032a1.249 1.249 0 001.839-1.101V6.001c0-.347-.142-.661-.371-.888zM3.25 28.033V7.263l1.5.016v18.722a1.25 1.25 0 001.039 1.233l.007.001c-.988.225-1.838.5-2.655.839l.108-.04zm4-3.248V3.291l.181-.002c2.878 0 5.475 1.204 7.315 3.136l.004.004v20.635a14.073 14.073 0 00-7.488-2.279H7.25zm17.5 0a14.146 14.146 0 00-7.554 2.313l.054-.033V6.43a10.078 10.078 0 017.509-3.138h-.009zm4 3.248c-.709-.3-1.56-.574-2.437-.777l-.109-.021a1.254 1.254 0 001.047-1.234V7.279l1.5-.016z"
        }
      ></path>
    </svg>
  );
}

export default Book1OpenSvgrepoComsvgIcon;
/* prettier-ignore-end */
