import { InputHTMLAttributes, FC } from 'react';

import { FormInputLabel, Input, Group } from './form-input.styles';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {/* Si label existe rendea <label> */}
      {label && (
        <FormInputLabel
          // Si se ha escrito dale la clase shrink
          shrink={Boolean(otherProps.value && typeof otherProps.value === "string" && otherProps.value.length)}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
