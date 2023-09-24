import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import cn from "classnames";

interface Props {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export const BaseLink: React.FC<Props> = ({ children, to, className }) => {
  return (
    <Link className={cn(styles.root, className)} to={to}>
      {children}
    </Link>
  );
};
