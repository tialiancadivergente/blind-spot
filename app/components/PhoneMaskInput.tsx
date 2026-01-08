"use client";

import React from "react";
import { formatBrazilPhone } from "@/lib/phone-mask";

export type PhoneMaskInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
> & {
  value: string;
  onChange: (value: string) => void;
};

export const PhoneMaskInput = React.forwardRef<HTMLInputElement, PhoneMaskInputProps>(
  ({ value, onChange, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={value}
        onChange={(e) => onChange(formatBrazilPhone(e.target.value))}
      />
    );
  }
);

PhoneMaskInput.displayName = "PhoneMaskInput";


