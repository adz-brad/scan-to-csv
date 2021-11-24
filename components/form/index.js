import React from "react";
import {
  FormControl,
  Stack,
  Input,
  Icon,
  WarningOutlineIcon,
} from "native-base";

const RequiredInput = ({
  label,
  type,
  placeholder,
  keyboardType,
  icon,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <FormControl isRequired>
      <Stack mx="2">
        <FormControl.Label>{label}</FormControl.Label>
        <Input
          value={value}
          onChangeText={onChange}
          type={type}
          keyboardType={keyboardType}
          size="lg"
          variant="underlined"
          placeholder={placeholder}
          InputLeftElement={
            <Icon as={icon} size={5} ml="2" color="muted.400" />
          }
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errorMessage}
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
};

export { RequiredInput };
