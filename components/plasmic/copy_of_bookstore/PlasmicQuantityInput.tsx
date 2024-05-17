// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5RiFpwPZc2Ux6gBUCfunxc
// Component: Yf234i2zrodn

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import { ModeValue, useMode } from "./PlasmicGlobalVariant__Mode"; // plasmic-import: pQjhaJ-jelU4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5RiFpwPZc2Ux6gBUCfunxc/projectcss
import sty from "./PlasmicQuantityInput.module.css"; // plasmic-import: Yf234i2zrodn/css

import MinusSvgrepoComsvgIcon from "./icons/PlasmicIcon__MinusSvgrepoComsvg"; // plasmic-import: NTXG9vR19-b1/icon
import PlusSvgrepoComsvgIcon from "./icons/PlasmicIcon__PlusSvgrepoComsvg"; // plasmic-import: XzYN7an9PwFd/icon

createPlasmicElementProxy;

export type PlasmicQuantityInput__VariantMembers = {};
export type PlasmicQuantityInput__VariantsArgs = {};
type VariantPropType = keyof PlasmicQuantityInput__VariantsArgs;
export const PlasmicQuantityInput__VariantProps = new Array<VariantPropType>();

export type PlasmicQuantityInput__ArgsType = {
  quantityValue?: number;
  onQuantityValueChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicQuantityInput__ArgsType;
export const PlasmicQuantityInput__ArgProps = new Array<ArgPropType>(
  "quantityValue",
  "onQuantityValueChange"
);

export type PlasmicQuantityInput__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultQuantityInputProps {
  quantityValue?: number;
  onQuantityValueChange?: (val: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicQuantityInput__RenderFunc(props: {
  variants: PlasmicQuantityInput__VariantsArgs;
  args: PlasmicQuantityInput__ArgsType;
  overrides: PlasmicQuantityInput__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "quantityValue",
        type: "writable",
        variableType: "number",

        valueProp: "quantityValue",
        onChangeProp: "onQuantityValueChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    mode: useMode()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [projectcss.global_mode_darkMode]: hasVariant(
            globalVariants,
            "mode",
            "darkMode"
          )
        }
      )}
    >
      <AntdButton
        className={classNames("__wab_instance", sty.button__yp29N)}
        onClick={async () => {
          const $steps = {};

          $steps["updateQuantityValue"] =
            $state.quantityValue > 1
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["quantityValue"]
                    },
                    operation: 3,
                    value: Math.max($state.quantityValue - 1, 1)
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    const oldValue = $stateGet(objRoot, variablePath);
                    $stateSet(objRoot, variablePath, oldValue - 1);
                    return oldValue - 1;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
          if (
            $steps["updateQuantityValue"] != null &&
            typeof $steps["updateQuantityValue"] === "object" &&
            typeof $steps["updateQuantityValue"].then === "function"
          ) {
            $steps["updateQuantityValue"] = await $steps["updateQuantityValue"];
          }
        }}
        size={"medium"}
        type={"text"}
      >
        <MinusSvgrepoComsvgIcon
          className={classNames(projectcss.all, sty.svg___88P49)}
          role={"img"}
        />
      </AntdButton>
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            {
              [sty.textglobal_mode_darkMode]: hasVariant(
                globalVariants,
                "mode",
                "darkMode"
              )
            }
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $state.quantityValue;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "1";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </div>
      <AntdButton
        className={classNames("__wab_instance", sty.button___9Uphu)}
        onClick={async () => {
          const $steps = {};

          $steps["updateQuantityValue"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["quantityValue"]
                  },
                  operation: 2
                };
                return (({ variable, value, startIndex, deleteCount }) => {
                  if (!variable) {
                    return;
                  }
                  const { objRoot, variablePath } = variable;

                  const oldValue = $stateGet(objRoot, variablePath);
                  $stateSet(objRoot, variablePath, oldValue + 1);
                  return oldValue + 1;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateQuantityValue"] != null &&
            typeof $steps["updateQuantityValue"] === "object" &&
            typeof $steps["updateQuantityValue"].then === "function"
          ) {
            $steps["updateQuantityValue"] = await $steps["updateQuantityValue"];
          }
        }}
        size={"medium"}
        type={"text"}
      >
        <PlusSvgrepoComsvgIcon
          className={classNames(projectcss.all, sty.svg__bbzMl)}
          role={"img"}
        />
      </AntdButton>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text"],
  freeBox: ["freeBox", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicQuantityInput__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicQuantityInput__VariantsArgs;
    args?: PlasmicQuantityInput__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicQuantityInput__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicQuantityInput__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicQuantityInput__ArgProps,
          internalVariantPropNames: PlasmicQuantityInput__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicQuantityInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicQuantityInput";
  } else {
    func.displayName = `PlasmicQuantityInput.${nodeName}`;
  }
  return func;
}

export const PlasmicQuantityInput = Object.assign(
  // Top-level PlasmicQuantityInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicQuantityInput
    internalVariantProps: PlasmicQuantityInput__VariantProps,
    internalArgProps: PlasmicQuantityInput__ArgProps
  }
);

export default PlasmicQuantityInput;
/* prettier-ignore-end */
