import { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import FormInputContainer from './FormInputContainer';

function EditAvatarPopup(props) {
  const avatar = useRef();

  function handleSubmit(ev) {
    ev.preventDefault();
    props.onUpdateAvatar({ avatar: avatar.current.value });
  }

  useEffect(() => {
    if (!props.isOpen) return;
    avatar.current.value = '';
  }, [props.isOpen]);

  return (
    <PopupWithForm
      title='Alterar a foto de perfil'
      name='edit-avatar'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <FormInputContainer>
        <input
          type='url'
          name='avatar'
          ref={avatar}
          className='form__field'
          placeholder='Link da imagem'
          required
        />
      </FormInputContainer>

      <button type='submit' className='form__button-submit'>
        {props.isLoading ? 'Salvando...' : 'Salvar'}
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
