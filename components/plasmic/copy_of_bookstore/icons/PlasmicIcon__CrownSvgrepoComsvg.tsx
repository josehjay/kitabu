// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CrownSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CrownSvgrepoComsvgIcon(props: CrownSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M512 152.469c0-21.469-17.422-38.875-38.891-38.875-21.484 0-38.906 17.406-38.906 38.875 0 10.5 4.172 20.016 10.938 27-26.453 54.781-77.016 73.906-116.203 56.594-34.906-15.438-47.781-59.563-52.141-93.75 14.234-7.484 23.938-22.391 23.938-39.594C300.734 78.016 280.719 58 256 58c-24.703 0-44.734 20.016-44.734 44.719 0 17.203 9.703 32.109 23.938 39.594-4.359 34.188-17.234 78.313-52.141 93.75-39.188 17.313-89.75-1.813-116.203-56.594 6.766-6.984 10.938-16.5 10.938-27 0-21.469-17.422-38.875-38.891-38.875C17.422 113.594 0 131 0 152.469c0 19.781 14.781 36.078 33.875 38.547l44.828 164.078h354.594l44.828-164.078C497.234 188.547 512 172.25 512 152.469zm-56.984 272.594c0 15.984-12.953 28.938-28.953 28.938H85.938C69.953 454 57 441.047 57 425.063v-2.406c0-16 12.953-28.953 28.938-28.953h340.125c16 0 28.953 12.953 28.953 28.953v2.406z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CrownSvgrepoComsvgIcon;
/* prettier-ignore-end */
