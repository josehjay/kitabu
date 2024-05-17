// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PenSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PenSvgrepoComsvgIcon(props: PenSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 64 64"}
      aria-hidden={"true"}
      role={"img"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "iconify iconify--emojione-monotone"
      )}
      preserveAspectRatio={"xMidYMid meet"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M60.609 3.389c-1.757-1.758-4.528-1.839-6.409-.292l-.829-.829-2.269 2.281.192.194-.806.754-.183-.176c-1.729-1.731-3.722-3.526-6.375-2.454-3.609 1.463-5.333 9.273-7.329 12.228-1.742 2.57-6.112 5.292-10.019 7.343.195.193.58.771.836.836 1.086-.479 2.192-.906 3.267-1.406 2.244-1.043 4.428-2.258 6.358-3.819 3.95-3.197 5.542-12.783 8.361-12.971 1.179-.085 2.33 1.01 3.306 2.082L28.294 26.25l.806.806L9.407 46.783l-6.188 10.92.818.818-1.758 2.333c-.299.352-.369.814-.156 1.027.209.207.672.137 1.021-.164l2.336-1.752.817.816 10.92-6.187 19.695-19.727.016.016.822.822L59.243 12.69l.219.219 2.267-2.281-.827-.828c1.548-1.881 1.465-4.652-.293-6.411M6.467 59.537l-2.003-2.003 5.165-9.114 5.952 5.953-9.114 5.164m31.284-25.245l-8.038-8.039 1.498-1.48 8.029 8.028-1.489 1.491M59.46 11.493l-6.945-6.945.858-.863 6.943 6.945-.856.863"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PenSvgrepoComsvgIcon;
/* prettier-ignore-end */
