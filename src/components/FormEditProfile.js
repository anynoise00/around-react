import { useState } from 'react';

function FormEditProfile(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      <div className='form__input-area'>
        <input
          type='text'
          name='name'
          id='profile-name-input'
          className='form__field'
          placeholder='Seu nome'
          minLength='2'
          maxLength='40'
          required
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <span className='form__input-error profile-name-input-error' />
      </div>
      <div className='form__input-area'>
        <input
          type='text'
          name='about'
          id='profile-description-input'
          className='form__field'
          placeholder='Uma breve descrição sobre você'
          minLength='2'
          maxLength='200'
          required
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <span className='form__input-error profile-description-input-error' />
      </div>
      <button type='submit' className='form__button-submit'>
        Salvar
      </button>
    </>
  );
}

export default FormEditProfile;
