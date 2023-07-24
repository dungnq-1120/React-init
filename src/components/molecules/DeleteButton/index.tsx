import { useTheme } from "@mui/material/styles";

import type { ButtonProps } from "~/components/atoms/Button";
import Button from "~/components/atoms/Button";
import { DeleteIcon } from "~/components/icons";

type DeleteButtonProps = Pick<ButtonProps, "onClick" | "size" | "sx">;

function DeleteButton({
  size = "extra-small",
  sx,
  ...rest
}: DeleteButtonProps) {
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
        <DeleteIcon
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

export default DeleteButton;
