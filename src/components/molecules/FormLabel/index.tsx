import { styled } from "@mui/material/styles";
import clsx from "clsx";
import type { ReactNode } from "react";

export type FormLabelProps = {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
};

const Label = styled("label")(({ theme }) => ({
  display: "block",
  paddingTop: "5px",
  position: "relative",
  color: theme.palette.text.primary,
  ...theme.typography.body1,

  "&.required::after": {
    content: "'*'",
    position: "absolute",
    top: "5px",
    paddingLeft: "3px",
    color: theme.palette.error.main,
  },
}));

function FormLabel({ required = false, ...rest }: FormLabelProps) {
  return <Label className={clsx({ required })} {...rest} />;
}

export default FormLabel;
