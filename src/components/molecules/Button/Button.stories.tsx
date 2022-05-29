import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { IconType } from "../../atoms/Icon/Icon";

import Button, { ButtonProps, ButtonType } from "./Button";

export default {
  component: Button,
  title: "Molecules/Button",
} as Meta;

const SingleButton: Story<ButtonProps> = (args) => <Button {...args} />;
const TwoButtons: Story<ButtonProps> = (args) => (
  <div
    style={{ width: "110px", display: "flex", justifyContent: "space-between" }}
  >
    <Button {...args} type={ButtonType.SECONDARY} label="Cancel" />
    <Button {...args} type={ButtonType.PRIMARY} label="OK" />
  </div>
);

export const Default = SingleButton.bind({});
Default.args = {
  onClick: action("onClick triggered"),
  label: "String label",
};

export const WithLabel = SingleButton.bind({});
WithLabel.args = {
  ...Default.args,
  label: "String label",
};

export const WithJsxChild = SingleButton.bind({});
WithJsxChild.args = {
  ...Default.args,
  children: (
    <span>
      <strong>JSX</strong> label
    </span>
  ),
};

export const Primary = SingleButton.bind({});
Primary.args = {
  ...Default.args,
  type: ButtonType.PRIMARY,
};

export const Secondary = SingleButton.bind({});
Secondary.args = {
  ...Default.args,
  type: ButtonType.SECONDARY,
};

export const PrimaryAndSecondaryButtons = TwoButtons.bind({});
PrimaryAndSecondaryButtons.args = {
  ...Default.args,
};

export const WithLeadingIcon = SingleButton.bind({});
WithLeadingIcon.args = {
  ...Default.args,
  iconType: IconType.DOWN,
};

export const WithTrailingIcon = SingleButton.bind({});
WithTrailingIcon.args = {
  ...Default.args,
  iconType: IconType.DOWN,
  trailingIcon: true,
};
