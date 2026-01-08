"use client";
declare module "react-input-mask" {
  import * as React from "react";

  export type InputMaskProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "children"
  > & {
    mask: string | Array<string | RegExp>;
    maskChar?: string | null | undefined;
    maskPlaceholder?: string | null | undefined;
    alwaysShowMask?: boolean | undefined;
    formatChars?: Record<string, string> | undefined;
    inputRef?: React.Ref<HTMLInputElement> | undefined;
    beforeMaskedStateChange?: (states: any) => any;
    children?: (inputProps: any) => React.ReactNode;
  };

  const InputMask: React.ComponentType<InputMaskProps>;
  export default InputMask;
}