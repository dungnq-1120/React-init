import type { OutlinedInputProps as MuiOutlinedInputProps } from "@mui/material/OutlinedInput";
import MuiOutlinedInput, {
  outlinedInputClasses as baseClasses,
} from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";

export type OutlinedInputTextProps = MuiOutlinedInputProps;

/**
 * Override Mui styles https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/OutlinedInput/OutlinedInput.js
 */
const Input = styled(MuiOutlinedInput)(({ theme, size }) => {
  const placeholder = {
    color: "#666666",
    opacity: 1,
  };

  return {
    color: "#212121",

    [`& .${baseClasses.input}`]: {
      boxSizing: "border-box",
      borderRadius: 2,
      position: "relative",
      backgroundColor: "#FCFCFB",

      ...(size === "small" && {
        height: 24,
        padding: "2px 6px",
        ...theme.typography.text14,
      }),
      ...(size === "medium" && {
        height: 36,
        padding: "6.5px 8px",
        ...theme.typography.text16,
      }),

      "&::-webkit-input-placeholder": placeholder,
      "&::-moz-placeholder": placeholder, // Firefox 19+
      "&::-ms-input-placeholder": placeholder, // Edge
    },

    [`&.${baseClasses.disabled}`]: {
      opacity: 0.5,
    },

    [`& .${baseClasses.notchedOutline}`]: {
      border: "1px solid #DBDFE2",
      transition: theme.transitions.create(["border-color"]),
    },

    [`&:hover .${baseClasses.notchedOutline}`]: {
      borderColor: theme.brandPalette.gray["300"],
    },

    [`&.${baseClasses.focused} .${baseClasses.notchedOutline}`]: {
      borderColor: "#4B84D0",
      borderWidth: "1px",
      boxShadow: "#CDDDF2 0 0 0 0.2rem",
    },

    [`&.${baseClasses.error} .${baseClasses.notchedOutline}`]: {
      borderColor: theme.palette.error.main,
      boxShadow: "none",
    },

    [`&.${baseClasses.error} .${baseClasses.input}`]: {
      color: theme.palette.error.main,
      backgroundColor: "#FFECEC",
    },

    [`&.${baseClasses.disabled} .${baseClasses.notchedOutline}`]: {
      borderColor: "currentColor",
    },
  };
});

const OutlinedInputText = forwardRef<HTMLInputElement, OutlinedInputTextProps>(
  function OutlinedInputText({ size = "small", ...rest }, ref) {
    return <Input size={size} inputRef={ref} {...rest} />;
  }
);

export default OutlinedInputText;
