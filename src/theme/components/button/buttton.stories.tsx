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


const Template: StoryFn = (props) => (
  <Button {...props}>Button</Button>
);

export const solid = Template.bind({});
solid.args = {
  fontSize: "40px",
  variant: "solid",
};
solid.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/HmdTC2vPomNR6MLSvikKml/Untitled?node-id=1%3A3",
  },
};

export const primary = Template.bind({});
primary.args = {
  variant: "primary",
};
