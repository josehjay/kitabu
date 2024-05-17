// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 69 37"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M46.681 27.45a5.271 5.271 0 00-2.531-.638 3.124 3.124 0 00-3.295 3.182 3.12 3.12 0 003.295 3.183 5.33 5.33 0 002.531-.633v3.2a9.667 9.667 0 01-2.742.424 6.072 6.072 0 01-5.897-3.753 6.076 6.076 0 01-.458-2.422 6.082 6.082 0 013.922-5.782 6.078 6.078 0 012.433-.39 9.15 9.15 0 012.742.43v3.199zm-31.407 0a5.232 5.232 0 00-2.528-.637 3.124 3.124 0 00-3.3 3.182 3.126 3.126 0 003.3 3.183 5.293 5.293 0 002.528-.633v3.2a9.587 9.587 0 01-2.745.424 6.068 6.068 0 01-6.349-6.175 6.075 6.075 0 016.35-6.17 9.099 9.099 0 012.744.427v3.199zm40.873-.592a3.08 3.08 0 00-3.111 3.137 3.082 3.082 0 003.111 3.14 3.084 3.084 0 003.113-3.14 3.084 3.084 0 00-.9-2.225 3.084 3.084 0 00-2.218-.912h.005zm6.295 3.136a6.122 6.122 0 01-6.3 6.176 6.123 6.123 0 01-6.3-6.176 6.122 6.122 0 016.301-6.172 6.123 6.123 0 016.3 6.172h-.001zm-28.617-3.25a10.308 10.308 0 00-2.352-.363c-1.206 0-1.861.4-1.861.977 0 .727.884.98 1.379 1.136l.83.264a3.586 3.586 0 012.843 3.412c0 3-2.634 4-4.937 4a17.993 17.993 0 01-3.247-.326v-2.746c.924.269 1.879.418 2.841.444 1.5 0 2.185-.438 2.185-1.113 0-.6-.6-.953-1.342-1.187-.181-.061-.456-.146-.642-.208-1.676-.53-3.073-1.515-3.073-3.488 0-2.23 1.67-3.728 4.443-3.728.989.013 1.973.14 2.933.379v2.547zM2.988 11.219A1.492 1.492 0 00.44 10.166c-.28.278-.438.657-.44 1.052v3.13a1.5 1.5 0 001.494 1.459 1.493 1.493 0 001.494-1.458v-3.13zm8.205-4.108a1.494 1.494 0 10-2.988 0v7.238a1.495 1.495 0 002.988 0v-7.24.002zm8.206-5.622a1.494 1.494 0 00-2.987 0v15.834a1.494 1.494 0 002.988 0l-.001-15.834zm8.205 5.622a1.494 1.494 0 10-2.988 0v7.238a1.494 1.494 0 102.988 0v-7.24.002zm8.2 4.108a1.487 1.487 0 00-2.54-1.054 1.49 1.49 0 00-.439 1.053v3.13a1.49 1.49 0 001.489 1.49 1.489 1.489 0 001.484-1.49l.006-3.13zm8.209-4.108a1.49 1.49 0 00-2.978 0v7.238a1.49 1.49 0 102.978 0v-7.24.002zm8.211-5.622a1.49 1.49 0 00-2.978 0v15.834a1.489 1.489 0 001.489 1.555 1.493 1.493 0 001.312-.783 1.49 1.49 0 00.177-.773V1.489zm8.209 5.622a1.5 1.5 0 00-2.561-1.055 1.49 1.49 0 00-.436 1.053v7.239a1.489 1.489 0 001.489 1.494 1.493 1.493 0 001.508-1.494v-7.24.003zm8.194 4.108a1.49 1.49 0 10-2.982 0v3.13a1.492 1.492 0 102.981 0v-3.13h.001zm-1.724 23.168v.187h-.532v1.383h-.219v-1.382h-.534v-.188h1.285zm.111 0h.342l.47 1.288h.008l.455-1.287h.336v1.569h-.224V34.67h-.008l-.476 1.287h-.207l-.465-1.287h-.01v1.287h-.219l-.002-1.57z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */