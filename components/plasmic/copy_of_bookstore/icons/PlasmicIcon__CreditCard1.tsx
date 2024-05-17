// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CreditCard1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CreditCard1Icon(props: CreditCard1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M39.933 22.666l-3.036-17.22a4.314 4.314 0 00-4.991-3.495L5.864 6.543a4.313 4.313 0 00-3.495 4.991l.223 1.266A4.314 4.314 0 000 16.75v17.056a4.313 4.313 0 004.309 4.309H30.16a4.313 4.313 0 004.308-4.309v-5.801l1.97-.348a4.28 4.28 0 002.782-1.771 4.28 4.28 0 00.713-3.22zm-2.639 1.872c-.3.428-.748.714-1.264.805l-1.562.275v-8.867a4.313 4.313 0 00-4.308-4.309H4.915l-.232-1.316a1.946 1.946 0 01.325-1.463c.3-.429.749-.715 1.264-.806l26.042-4.592a1.962 1.962 0 012.269 1.589l3.036 17.22a1.946 1.946 0 01-.325 1.463zM30.16 35.764H4.309a1.96 1.96 0 01-1.959-1.959v-8.352h29.768v8.352a1.96 1.96 0 01-1.958 1.959zM4.309 14.792H30.16a1.96 1.96 0 011.958 1.959v1.022H2.35v-1.022a1.96 1.96 0 011.959-1.959zm27.81 5.331v2.98H2.35v-2.98h29.768z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.308 31.046h-5.33a1.175 1.175 0 000 2.35h5.33a1.175 1.175 0 000-2.35z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CreditCard1Icon;
/* prettier-ignore-end */
