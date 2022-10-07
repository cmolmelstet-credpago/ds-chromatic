import { create } from '@storybook/theming';
import logo from "./logo.svg"

export default create({
  base: 'light',
  colorPrimary: 'red',
  colorSecondary: '#1FC3F3',
  brandTitle: 'Design System CredPago',
  brandUrl: 'https://github.com/CP-CredPago/cp-labs-ui',
  brandImage: logo,
  brandTarget: '_self',
});