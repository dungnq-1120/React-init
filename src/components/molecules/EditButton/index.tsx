import { useTheme } from "@mui/material/styles";

import type { ButtonProps } from "~/components/atoms/Button";
import Button from "~/components/atoms/Button";
import { ModeEditIcon } from "~/components/icons";

type EditButtonProps = Pick<ButtonProps, "onClick" | "size" | "sx">;

function EditButton({ size = "extra-small", sx, ...rest }: EditButtonProps) {
  const { brandPalette } = useTheme();

  return (
    <Button
      variant="outlined"
      sx={{
        borderColor: brandPalette.gray["300"],
        color: brandPalette.gray["700"],
        ...sx,
      }}
      size={size}
      startIcon={
        <ModeEditIcon
          sx={{
            color: brandPalette.gray["400"],
          }}
        />
      }
      {...rest}
    >
      編集
    </Button>
  );
}

export default EditButton;
