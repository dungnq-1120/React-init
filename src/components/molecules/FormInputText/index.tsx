import type { TextFieldProps } from "@mui/material/TextField";
import type { SystemProps } from "@mui/system";
import { forwardRef } from "react";

import TextField from "~/components/atoms/FieldText";

import FormErrorMessage from "../FormErrorMessage";

interface FormInputTextProps extends Omit<TextFieldProps, "ref"> {
  errorMessage?: string;
  width?: SystemProps["width"];
}

const FormInputText = forwardRef<HTMLInputElement, FormInputTextProps>(
  function FormInputText({ errorMessage, sx, width, ...inputTextProps }, ref) {
    return (
      <>
        <TextField
          ref={ref}
          sx={{
            width,
            ...(Array.isArray(sx) ? sx : [sx]),
          }}
          {...inputTextProps}
        />
        <FormErrorMessage message={errorMessage} />
      </>
    );
  }
);

export default FormInputText;
