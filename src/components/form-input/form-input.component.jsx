import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {/* Si label existe rendea <label> */}
      {label && (
        <label
          // Si se ha escrito dale la clase shrink, por eso el .value
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
