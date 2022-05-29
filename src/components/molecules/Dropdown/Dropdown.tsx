import { createRef, RefObject, useEffect, useState, VFC } from "react";
import classNames from "classnames";

import { IconType } from "../../atoms/Icon/Icon";

import styles from "./Dropdown.module.scss";

import Button, { ButtonType } from "../Button/Button";
import Label from "../../atoms/Label/Label";

export interface DropdownProps {
  label?: string;
  type?: ButtonType;
  options: string[];
  onOptionClick: (option: string) => void;
}

const Dropdown: VFC<DropdownProps> = ({
  type,
  label,
  options,
  onOptionClick,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionRefs, setOptionRefs] = useState<RefObject<HTMLButtonElement>[]>(
    []
  );

  useEffect(() => {
    setOptionRefs(options.map(() => createRef<HTMLButtonElement>()));
  }, []);

  return (
    <div
      className={classNames(styles.Dropdown, {
        [styles.Secondary]: type === ButtonType.SECONDARY,
      })}
      onBlur={(event) => {
        if (!optionRefs.find((ref) => ref.current === event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <Button
        label={label}
        type={type}
        onClick={() => setIsOpen((previousValue) => !previousValue)}
        trailingIcon
        iconType={isOpen ? IconType.UP : IconType.DOWN}
      />
      <div
        className={classNames(styles.Menu, {
          [styles.Open]: isOpen,
        })}
      >
        {options.map((option, index) => (
          <button
            key={option + index}
            ref={optionRefs[index]}
            onClick={() => onOptionClick(option)}
          >
            <Label>{option}</Label>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
