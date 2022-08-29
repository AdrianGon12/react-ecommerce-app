import React from 'react';

import { FormInputLabel, Input, Group } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {/* Si label existe rendea <label> */}
      {label && (
        <FormInputLabel
          // Si se ha escrito dale la clase shrink
          shrink={otherProps.value.length}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
