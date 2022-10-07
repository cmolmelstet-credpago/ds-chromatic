import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Meta, StoryFn } from "@storybook/react";

import theme from "../index";
import { Teste } from "./Button";

export default {
  title: "Components / Template",
  argTypes: getThemingArgTypes(theme, "Button"),
  args: {
    disabled: false,
  },
} as Meta;


const Template: StoryFn = (props) => (
  <Teste />
);

export const solid = Template.bind({});
solid.args = {};
