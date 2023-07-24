import MuiMenuItem from "@mui/material/MenuItem";
import type {
  SelectProps as MuiSelectProps,
  SelectChangeEvent,
} from "@mui/material/Select";
import MuiSelect, { selectClasses as baseClasses } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'

import OutlinedInputText from "~/components/atoms/OutlinedInputText";

type BaseProps<T = unknown> = Pick<
  MuiSelectProps<T>,
  | "classes"
  | "value"
  | "onChange"
  | "defaultValue"
  | "onBlur"
  | "onFocus"
  | "onInvalid"
  | "onKeyDown"
  | "onKeyUp"
  | "id"
  | "aria-describedby"
  | "autoFocus"
  | "disabled"
  | "error"
  | "fullWidth"
  | "inputRef"
  | "name"
  | "readOnly"
  | "sx"
  | "autoWidth"
  | "displayEmpty"
  | "labelId"
  | "multiple"
  | "renderValue"
  | "open"
  | "onClose"
  | "onOpen"
  | "MenuProps"
>;

type Option = {
  value: string | number;
  label: string;
};

interface SelectProps<T = unknown> extends BaseProps<T> {
  /**
   * The list of options to display on list menu items
   */
  options: Option[];
  /**
   * The size of input component
   * @default 'small'
   */
  size?: "small" | "medium";
  /**
   * The placeholder of the select component
   */
  placeholder?: string;
}

const MenuProps: MuiSelectProps["MenuProps"] = {
  PaperProps: {
    style: {
      maxHeight: 250,
    },
  },
};

/**
 * Override Mui styles https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/Select/Select.js
 */
const StyledSelect = styled(MuiSelect)(({ size, error }) => {
  return {
    [`& .${baseClasses.select}`]: {
      ...(size === "small" && {
        height: 24,
      }),
      ...(size === "medium" && {
        height: 36,
      }),
    },

    [`& .${baseClasses.icon}`]: {
      right: "1px",

      ...(error && {
        color: "#EE4638",
      }),
    },
  };
}) as <T>(props: MuiSelectProps<T>) => JSX.Element;

function Select<T = unknown>(props: SelectProps<T>) {
  const { options, size = "medium", placeholder, renderValue, ...rest } = props;

  const internalRenderValue: SelectProps<T>["renderValue"] = (selected) => {
    if (
      placeholder &&
      (isNil(selected) || isEmpty(selected))
    ) {
      return <em>{placeholder}</em>;
    }

    if (renderValue) {
      return renderValue?.(selected);
    }

    if (Array.isArray(selected)) {
      return options
        .filter((option) => selected.includes(option.value))
        .map((option) => option.label)
        .join(", ");
    }

    if (isString(selected) || isNumber(selected)) {
      return options.find((option) => selected === option.value)?.label;
    }

    return undefined;
  };

  return (
    <StyledSelect
      MenuProps={MenuProps}
      displayEmpty={!!placeholder}
      renderValue={internalRenderValue}
      size={size}
      {...rest}
      input={<OutlinedInputText size={size} />}
    >
      {options.map((option) => (
        <MuiMenuItem key={option.value} value={option.value}>
          {option.label}
        </MuiMenuItem>
      ))}
    </StyledSelect>
  );
}

export default Select;

export type { SelectChangeEvent };
