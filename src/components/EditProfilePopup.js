import { useContext, useEffect, useState } from 'react';
import FormInputContainer from './FormInputContainer';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  function handleNameChange(ev) {
    setName(ev.target.value);
  }

  function handleAboutChange(ev) {
    setAbout(ev.target.value);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    props.onUpdateUser({ name, about });
  }

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      title='Editar perfil'
      name='edit-profile'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <FormInputContainer>
        <input
          type='text'
          name='name'
          value={name}
          className='form__field'
          placeholder='Seu nome'
          minLength='2'
          maxLength='40'
          required
          onChange={handleNameChange}
        />
      </FormInputContainer>
      <FormInputContainer>
        <input
          type='text'
          name='about'
          value={about}
          className='form__field'
          placeholder='Uma breve descrição sobre você'
          minLength='2'
          maxLength='200'
          required
          onChange={handleAboutChange}
        />
      </FormInputContainer>

      <button type='submit' className='form__button-submit'>
        Salvar
      </button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
