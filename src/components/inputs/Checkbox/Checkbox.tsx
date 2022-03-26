import { ChangeEventHandler, VFC } from "react";
import classNames from "classnames";

import Label from "../../common/Label/Label";

import styles from "./Checkbox.module.scss";

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onToggle?: () => void;
}

const Checkbox: VFC<CheckboxProps> = ({
  label,
  checked,
  onToggle,
}: CheckboxProps) => {
  return (
    <div
      className={styles.Checkbox}
      onClick={onToggle}
      role="checkbox"
      aria-checked={checked}
    >
      <input type="checkbox" name="" id="" checked={checked} />
      {label && (
        <Label
          className={classNames(styles.Label, {
            [styles.Checked]: checked,
          })}
        >
          {label}
        </Label>
      )}
    </div>
  );
};

export default Checkbox;
