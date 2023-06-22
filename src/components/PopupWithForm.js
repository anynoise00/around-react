import React, { useState } from 'react';

function PopupWithForm(props) {
  const [data, setData] = useState({});

  function handleChange(ev) {
    const objData = { ...data };
    const { name, value } = ev.target;

    objData[name] = value;
    setData(objData);
  }

  function getValue(name) {
    return data[name];
  }

  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && 'popup_visible'
      }`}
    >
      <form
        className='form form_type_edit-avatar'
        name={props.name}
        onSubmit={props.onSubmit}
        noValidate
      >
        <h2 className='form__header'>{props.title}</h2>

        {React.Children.map(props.children, (child) => {
          return React.cloneElement(child, {
            onChange: (ev) => handleChange(ev),
            onValueChange: getValue,
          });
        })}

        <button type='submit' className='form__button-submit'>
          {props.buttonText}
        </button>
        <button
          type='button'
          className='button popup__button-close'
          onClick={props.onClose}
        />
      </form>
      <div className='popup__overlay' />
    </div>
  );
}

export default PopupWithForm;
