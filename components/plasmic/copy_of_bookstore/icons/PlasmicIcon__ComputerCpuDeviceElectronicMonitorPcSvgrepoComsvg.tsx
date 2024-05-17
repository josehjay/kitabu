// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ComputerCpuDeviceElectronicMonitorPcSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ComputerCpuDeviceElectronicMonitorPcSvgrepoComsvgIcon(
  props: ComputerCpuDeviceElectronicMonitorPcSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M28.8 1h-8.6A2.21 2.21 0 0018 3.2V5H3.6A2.61 2.61 0 001 7.6v14.8A2.61 2.61 0 003.6 25h6.64l-.54 4h-.84a1 1 0 100 2h10.28a1 1 0 000-2h-.86l-.68-4h6.8a2.61 2.61 0 002.6-2.6V7.6A2.61 2.61 0 0024.4 5H20V3.2a.2.2 0 01.2-.2h8.6a.2.2 0 01.2.2v23.6a.2.2 0 01-.2.2H21a1 1 0 000 2h7.8a2.21 2.21 0 002.2-2.2V3.2A2.21 2.21 0 0028.8 1zM16.25 29h-4.53l.54-4h3.32zM25 7.6v14.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6h20.8a.6.6 0 01.6.6z"
        }
        data-name={"Layer 11"}
      ></path>
    </svg>
  );
}

export default ComputerCpuDeviceElectronicMonitorPcSvgrepoComsvgIcon;
/* prettier-ignore-end */
