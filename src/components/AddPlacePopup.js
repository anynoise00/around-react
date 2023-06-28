import { useState } from 'react';
import FormInputContainer from './FormInputContainer';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleNameChange(ev) {
    setName(ev.target.value);
  }

  function handleLinkChange(ev) {
    setLink(ev.target.value);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    props.onAddPlaceSubmit({ name, link });
  }

  return (
    <PopupWithForm
      title='Novo local'
      name='add-place'
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
          placeholder='Título'
          minLength='2'
          maxLength='30'
          required
          onChange={handleNameChange}
        />
      </FormInputContainer>
      <FormInputContainer>
        <input
          type='url'
          name='link'
          value={link}
          className='form__field'
          placeholder='Link da imagem'
          required
          onChange={handleLinkChange}
        />
      </FormInputContainer>

      <button type='submit' className='form__button-submit'>
        {props.isLoading ? 'Adicionando...' : 'Adicionar'}
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
