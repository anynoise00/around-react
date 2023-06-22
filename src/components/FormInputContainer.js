import React from 'react';

function FormInputContainer(props) {
  return (
    <div className='form__input-area'>
      {React.Children.map(props.children, (c) => {
        return React.cloneElement(c, {
          name: props.name,
          value: props.getValue(props.name) || '',
          onChange: props.onChange,
        });
      })}
      <span className='form__input-error image-title-input-error' />
    </div>
  );
}

export default FormInputContainer;
