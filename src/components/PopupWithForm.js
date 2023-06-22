import React, { useEffect, useState } from 'react';

function PopupWithForm(props) {
  const [data, setData] = useState({});

  function handleChange(ev) {
    const target = ev.target;
    setData({ ...data, [target.name]: target.value });
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    for (const key in data) {
      if (data[key] === '') return;
    }

    props.onSubmit(data);
  }

  function getValue(name) {
    return data[name];
  }

  useEffect(() => {
    const initialData = {};
    React.Children.forEach(props.children, (c) => {
      initialData[c.props.name] = '';
    });

    setData(initialData);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && 'popup_visible'
      }`}
    >
      <form
        className='form form_type_edit-avatar'
        name={props.name}
        onSubmit={handleSubmit}
        noValidate
      >
        <h2 className='form__header'>{props.title}</h2>

        {React.Children.map(props.children, (c) => {
          return React.cloneElement(c, {
            onChange: (ev) => handleChange(ev),
            getValue,
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
