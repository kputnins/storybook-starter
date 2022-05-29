import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ButtonType } from "../Button/Button";

import Dropdown, { DropdownProps } from "./Dropdown";

export default {
  component: Dropdown,
  title: "Molecules/Dropdown",
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  onOptionClick: action(`onOptionClick triggered with:`),
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  type: ButtonType.SECONDARY,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  label: "Text label",
};

export const SecondaryWithLabel = Template.bind({});
SecondaryWithLabel.args = {
  ...Default.args,
  label: "Text label",
  type: ButtonType.SECONDARY,
};
