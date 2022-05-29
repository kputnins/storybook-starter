import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import Icon, { IconProps, IconSize, IconType } from "./Icon";

export default {
  component: Icon,
  title: "Atoms/Icon",
  argTypes: {
    size: {
      options: IconSize,
      control: { type: "radio" },
    },
    type: {
      options: IconType,
      control: { type: "select" },
    },
    color: {
      control: { type: "color" },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: IconType.UP,
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: IconSize.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
  ...Default.args,
  size: IconSize.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: IconSize.LARGE,
};

export const WithCustomColor = Template.bind({});
WithCustomColor.args = {
  ...Default.args,
  color: "red",
};
