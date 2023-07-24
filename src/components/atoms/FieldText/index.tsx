import { inputClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";
import MuiTextField from "@mui/material/TextField";
import { forwardRef } from "react";

const Input = styled(MuiTextField)(({ theme, size }) => {
  const placeholder = {
    color: "#666666",
    opacity: 1,
  };

  return {
    borderRadius: 2,
    ...theme.typography.text14,
    color: theme.palette.text.primary,
    backgroundColor: "#FCFCFB",
    outlineWidth: 0,

    "&::-webkit-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder, // Firefox 19+
    "&::-ms-input-placeholder": placeholder, // Edge

    "&:hover": {
      borderColor: "#F09123",
    },

    "&:focus": {
      borderColor: "#F09123",
      boxShadow: "#CDDDF2 0 0 0 0.2rem",
    },

    "&.error": {
      borderColor: theme.palette.error.main,
      boxShadow: "none",
      color: theme.palette.error.main,
      backgroundColor: "#FFECEC",
    },

    "&.fullWidth": {
      width: "100%",
    },

    "&:disabled": {
      opacity: 0.5,
      color: "rgba(0, 0, 0, 0.38)",
      borderColor: "currentColor",
    },

    [`& .${inputClasses.root}`]: {
      ...(size === "small" && {
        height: 36,
        padding: "2px 6px",
        ...theme.typography.text14,
      }),
      ...(size === "medium" && {
        height: 56,
        padding: "6.5px 8px",
        ...theme.typography.text16,
      }),
    },
  };
});

const TextField = forwardRef<HTMLInputElement, MuiTextFieldProps>(
  function TextField({ ...rest }, ref) {
    return <Input inputRef={ref} {...rest} />;
  }
);
export default TextField;
