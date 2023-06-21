import { useState } from 'react';

function FormAddPlace(props) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  return (
    <>
      <div className='form__input-area'>
        <input
          type='text'
          name='title'
          className='form__field'
          placeholder='Título'
          minLength='2'
          maxLength='30'
          required
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <span className='form__input-error image-title-input-error' />
      </div>
      <div className='form__input-area'>
        <input
          type='url'
          name='link'
          className='form__field'
          placeholder='Link da imagem'
          required
          value={link}
          onChange={(ev) => setLink(ev.target.value)}
        />
        <span className='form__input-error image-link-input-error' />
      </div>
      <button type='submit' className='form__button-submit'>
        Adicionar
      </button>
    </>
  );
}

export default FormAddPlace;
