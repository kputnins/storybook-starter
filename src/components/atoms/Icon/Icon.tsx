import { VFC } from "react";
import classNames from "classnames";

import ChevronDown from "../../../assets/icons/chevron-down.svg";
import ChevronLeft from "../../../assets/icons/chevron-left.svg";
import ChevronRight from "../../../assets/icons/chevron-right.svg";
import ChevronUp from "../../../assets/icons/chevron-up.svg";

import styles from "./Icon.module.scss";

export enum IconType {
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  UP = "UP",
}

const getIconByType = (type: IconType) => {
  switch (type) {
    case IconType.DOWN:
      return <ChevronDown />;

    case IconType.LEFT:
      return <ChevronLeft />;

    case IconType.RIGHT:
      return <ChevronRight />;

    case IconType.UP:
      return <ChevronUp />;

    default:
      return null;
  }
};

export enum IconSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

const getIconSize = (size: IconSize): string => {
  switch (size) {
    case IconSize.SMALL:
      return styles.Small;

    case IconSize.MEDIUM:
      return styles.Medium;

    case IconSize.LARGE:
      return styles.Large;

    default:
      return "";
  }
};

export interface IconProps {
  type: IconType;
  size?: IconSize;
  color?: string;
}

const Icon: VFC<IconProps> = ({
  type,
  size = IconSize.MEDIUM,
  color,
}: IconProps) => (
  <span
    style={{ fill: color }}
    className={classNames(styles.Icon, getIconSize(size))}
  >
    {getIconByType(type)}
  </span>
);

export default Icon;
