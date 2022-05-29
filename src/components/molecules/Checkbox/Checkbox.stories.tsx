import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Checkbox, { CheckboxProps } from "./Checkbox";
import { useState } from "react";

export default {
  component: Checkbox,
  title: "Molecules/Checkbox",
  argTypes: {
    label: {
      description: "Label for the checkbox. Can be string or React element",
      control: "text",
    },
    checked: {
      description: "Is input checked",
      control: "boolean",
    },
    onToggle: {
      description: "Event handler callback when user toggles checkbox",
      control: "function",
    },
  },
} as Meta;

const Uncontrolled: Story<CheckboxProps> = (args) => <Checkbox {...args} />;
const Controlled: Story<CheckboxProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onToggle={() => {
        args.onToggle?.();
        setChecked((previousValue) => !previousValue);
      }}
    />
  );
};

export const Default = Uncontrolled.bind({});
Default.args = {};

export const WithLabel = Controlled.bind({});
WithLabel.args = {
  ...Default.args,
  label: "My checkbox label",
};

export const Checked = Controlled.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};

export const WithOnToggleHandler = Controlled.bind({});
WithOnToggleHandler.args = {
  ...Default.args,
  label: "My checkbox label",
  onToggle: action("onClick triggered"),
};
