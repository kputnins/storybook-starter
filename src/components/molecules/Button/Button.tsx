import { FC } from "react";
import classNames from "classnames";

import Label from "../../atoms/Label/Label";
import Icon, { IconSize, IconType } from "../../atoms/Icon/Icon";

import styles from "./Button.module.scss";

export enum ButtonType {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

const getButtonType = (type: ButtonType): string => {
  switch (type) {
    case ButtonType.PRIMARY:
      return styles.Primary;

    case ButtonType.SECONDARY:
      return styles.Secondary;

    default:
      return styles.Primary;
  }
};

export interface ButtonProps {
  children?: JSX.Element;
  label?: string;
  type?: ButtonType;
  iconType?: IconType;
  trailingIcon?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  label,
  type = ButtonType.PRIMARY,
  iconType,
  trailingIcon,
  onClick,
}: ButtonProps) => (
  <button
    className={classNames(styles.Button, getButtonType(type), {
      [styles.TrailingIcon]: trailingIcon,
      [styles.NoLabel]: !label && !children,
    })}
    onClick={onClick}
  >
    {iconType && (
      <Icon
        type={iconType}
        size={IconSize.SMALL}
        color={type === ButtonType.PRIMARY ? "#fff" : "navy"}
      />
    )}
    {children ? children : <Label>{label}</Label>}
  </button>
);

export default Button;
