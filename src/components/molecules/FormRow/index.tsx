import type { SxProps, Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import type { SystemProps } from "@mui/system";
import type { ReactNode } from "react";

export interface FormRowProps {
  sx?: SxProps<Theme>;
  id: string;
  label?: string;
  children: ReactNode;
  width?: SystemProps["width"];
}

const Label = styled("label")(({ theme }) => ({
  display: "block",
  paddingTop: "5px",
  color: theme.palette.common.black,
  ...theme.typography.body1,
}));

function FormRow({ sx, id, width, label, children }: FormRowProps) {
  return (
    <Grid2
      container
      width={width}
      sx={{
        "& ~ &": {
          marginTop: 2,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      }}
    >
      {label ? (
        <>
          <Grid2 xs={4}>
            <Label htmlFor={id}>{label}</Label>
          </Grid2>
          <Grid2 xs={8}>{children}</Grid2>
        </>
      ) : (
        <Grid2 xs={12}>{children}</Grid2>
      )}
    </Grid2>
  );
}

export default FormRow;
