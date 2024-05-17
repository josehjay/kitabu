// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type User2SvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function User2SvgrepoComsvgIcon(props: User2SvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g stroke={"none"} strokeWidth={"1"} fill={"none"} fillRule={"evenodd"}>
        <path
          d={
            "M24 0v24H0V0h24zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018zm.265-.113l-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022zm-.715.002a.023.023 0 00-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092z"
          }
          fillRule={"nonzero"}
        ></path>

        <path
          d={
            "M16 14a5 5 0 014.995 4.783L21 19v1a2 2 0 01-1.85 1.995L19 22H5a2 2 0 01-1.995-1.85L3 20v-1a5 5 0 014.783-4.995L8 14h8zm0 2H8a3 3 0 00-2.995 2.824L5 19v1h14v-1a3 3 0 00-2.824-2.995L16 16zM12 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"
          }
          fill={"currentColor"}
        ></path>
      </g>
    </svg>
  );
}

export default User2SvgrepoComsvgIcon;
/* prettier-ignore-end */
