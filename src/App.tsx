import {
  Button,
  ChakraProvider
} from "@chakra-ui/react"
import theme from "./theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Button variant="solid" colorScheme="pink" >asdsad</Button>
  </ChakraProvider>
)
