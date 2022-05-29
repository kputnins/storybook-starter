import { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Label.module.scss";

export interface LabelProps {
  children?: ReactNode;
  className?: string;
}

const Label: FC<LabelProps> = ({ children, className }: LabelProps) => {
  return (
    <span className={classNames(styles.Label, className)}>{children}</span>
  );
};

export default Label;
