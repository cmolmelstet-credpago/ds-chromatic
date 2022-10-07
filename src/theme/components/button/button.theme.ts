import type {
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "16px",
  lineHeight: "22px",
  fontWeight: "500",
  borderRadius: "6px",
  _focus: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
  },
  _hover: {
    _disabled: {
      bg: "initial",
    },
  },
};

const variantPrimary: SystemStyleFunction = () => {
  return {
    px: 10,
    py: 2,
    background: `primary.light`,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: "white",
    _hover: {
      bg: `primary.base`,
    },
  };
};

const variants = {
  primary: variantPrimary,
};

const sizes: Record<string, SystemStyleObject> = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: "lg",
    px: 6,
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: "md",
    px: 4,
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: "sm",
    px: 3,
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: "xs",
    px: 2,
  },
};

const defaultProps = {
  variant: "solid",
  size: "md",
  colorScheme: "gray",
};

const button = {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};

export default button;
