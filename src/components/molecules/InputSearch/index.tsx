import type { InputBaseProps, SxProps } from "@mui/material";
import { IconButton, InputBase, Box } from "@mui/material";
import { forwardRef } from "react";

import { OutlineSearchIcon } from "~/components/icons";

export interface InputSearchProps extends InputBaseProps {
  rootSx?: SxProps;
}

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  function InputSearch(props, ref) {
    const { rootSx, placeholder, ...inputBaseProps } = props;

    return (
      <Box
        sx={{
          display: "flex",
          border: "1px solid #B6B6B6",
          justifyContent: "space-between",
          borderRadius: "4px",
          ...rootSx,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
          inputProps={{ "aria-label": placeholder }}
          inputRef={ref}
          {...inputBaseProps}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <OutlineSearchIcon />
        </IconButton>
      </Box>
    );
  }
);
export default InputSearch;
