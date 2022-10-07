import { Button, ThemingProps } from "@chakra-ui/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Meta, StoryFn } from "@storybook/react";

import theme from "../../index";

export default {
  title: "Components / Button",
  argTypes: getThemingArgTypes(theme, "Button"),
  args: {
    disabled: false,
  },
} as Meta;

type StoryProps = ThemingProps<"Button">;

const Template: StoryFn<StoryProps> = (props) => (
  <Button {...props}>Button</Button>
);

export const solid = Template.bind({});
solid.args = {
  variant: "solid",
};
solid.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/q1IwS9W1BXZb3Jax6LcsXi/Components-v1.1?node-id=102%3A12887",
  },
};



export const primary = Template.bind({});
primary.args = {
  variant: "primary",
};
primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/q1IwS9W1BXZb3Jax6LcsXi/Components-v1.1?node-id=102%3A12800",
  },
};
