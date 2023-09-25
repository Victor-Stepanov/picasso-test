import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";

type ViewVariant = "primary";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  viewVariant: ViewVariant;
}

export const Button: React.FC<Props> = ({
  children,
  className,
  viewVariant,
  ...rest
}) => {
  return (
    <button
      className={cn(
        styles.root,
        className,
        viewVariant && styles[`button_variant_${viewVariant}`]
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
