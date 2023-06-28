function PopupWithForm(props) {
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

        {props.children}

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
