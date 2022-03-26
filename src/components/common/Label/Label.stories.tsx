import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import Label, { LabelProps } from "./Label";

export default {
  component: Label,
  title: "Common/Label",
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const WithTextLabel = Template.bind({});
WithTextLabel.args = {
  children: "This is my label text",
};

export const WithJSXLabel = Template.bind({});
WithJSXLabel.args = {
  children: (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>JSX</span>
      <span>Label</span>
    </div>
  ),
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  children: "This is my label text",
  className: "my-consumer-project-class",
};
