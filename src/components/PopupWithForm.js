function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <form className='form form_type_edit-avatar' name={props.name} noValidate>
        <button type='button' className='button popup__button-close' />
        <h2 className='form__header'>{props.title}</h2>
        {props.children}
        <button type='submit' className='form__button-submit'>
          Salvar
        </button>
      </form>
      <div className='popup__overlay' />
    </div>
  );
}

export default PopupWithForm;
