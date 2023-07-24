import { useTheme } from "@mui/material/styles";

import Typography from "~/components/atoms/Typography";

export type FormErrorMessageProps = {
  message?: string;
};

function FormErrorMessage({ message }: FormErrorMessageProps) {
  const theme = useTheme();
  return (
    <>
      {!!message && (
        <Typography
          variant="text12"
          color={theme.palette.error.main}
          marginTop={"5px"}
        >
          {message}
        </Typography>
      )}
    </>
  );
}

export default FormErrorMessage;
