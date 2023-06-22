import React from 'react';

function FormInputContainer(props) {
  return (
    <div className='form__input-area'>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          name: props.name,
          value: props.onValueChange(props.name) || '',
          onChange: props.onChange,
        });
      })}
      <span className='form__input-error image-title-input-error' />
    </div>
  );
}

export default FormInputContainer;
