// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VisaSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VisaSvgrepoComsvgIcon(props: VisaSvgrepoComsvgIconProps) {
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
          "M15.854 11.329l-2.003 9.367h-2.424l2.006-9.367zm10.197 6.048l1.275-3.518.735 3.518zm2.703 3.319h2.242l-1.956-9.367h-2.079c-.459 0-.853.281-1.019.68l-.003.007-3.635 8.68h2.544l.506-1.4h3.109zm-6.325-3.058c.01-2.473-3.419-2.609-3.395-3.714.008-.336.327-.694 1.027-.785a4.55 4.55 0 012.417.431l-.027-.012.425-1.987a6.383 6.383 0 00-2.266-.416h-.001c-2.396 0-4.081 1.275-4.096 3.098-.015 1.348 1.203 2.099 2.122 2.549.945.459 1.262.754 1.257 1.163-.006.63-.752.906-1.45.917l-.109.001a5.047 5.047 0 01-2.407-.606l.027.013-.439 2.052a7.178 7.178 0 002.651.497h.045-.002c2.546 0 4.211-1.257 4.22-3.204zm-10.038-6.309l-3.926 9.367H5.903l-1.932-7.477a1.028 1.028 0 00-.57-.82l-.006-.003a9.872 9.872 0 00-2.325-.786l-.066-.011.058-.271h4.125a1.13 1.13 0 011.115.948l.001.006 1.021 5.421 2.522-6.376z"
        }
      ></path>
    </svg>
  );
}

export default VisaSvgrepoComsvgIcon;
/* prettier-ignore-end */