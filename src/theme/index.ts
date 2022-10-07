import { extendTheme, Theme } from "@chakra-ui/react";

import components from "./components";
import config from "./config/config.theme";
import foundations from "./foundations";

const theme = extendTheme({
  ...foundations,
  components,
  config,
});

export default theme as Theme;
