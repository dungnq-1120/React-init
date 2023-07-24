import { styled } from "@mui/material/styles";
import MuiTextareaAutosize from "@mui/material/TextareaAutosize";
import type { TextareaAutosizeProps as MuiTextareaAutosizeProps } from "@mui/material/TextareaAutosize";
import clsx from "clsx";

export interface TextareaProps extends MuiTextareaAutosizeProps {
  error?: boolean;
  fullWidth?: boolean;
}

const Input = styled(MuiTextareaAutosize)(({ theme }) => {
  const placeholder = {
    color: "#666666",
    opacity: 1,
  };

  return {
    borderRadius: 2,
    padding: "2px 6px",
    ...theme.typography.text14,
    color: theme.palette.text.primary,
    border: "1px solid #DBDFE2",
    backgroundColor: "#FCFCFB",
    outlineWidth: 0,

    "&::-webkit-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder, // Firefox 19+
    "&::-ms-input-placeholder": placeholder, // Edge

    "&:hover": {
      borderColor: theme.brandPalette.gray["300"],
    },

    "&:focus": {
      borderColor: "#4B84D0",
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
  };
});

function Textarea({
  error = false,
  fullWidth = false,
  ...rest
}: TextareaProps) {
  return (
    <Input
      className={clsx({
        error,
        fullWidth,
      })}
      {...rest}
    />
  );
}

export default Textarea;
