import { useState } from 'react';

function FormEditAvatar(props) {
  const [link, setLink] = useState('');

  return (
    <>
      <div className='form__input-area'>
        <input
          type='url'
          name='link'
          id='avatar-link-input'
          className='form__field'
          placeholder='Link da imagem'
          required
          value={link}
          onChange={(ev) => setLink(ev.target.value)}
        />
        <span className='form__input-error avatar-link-input-error' />
      </div>
      <button type='submit' className='form__button-submit'>
        Salvar
      </button>
    </>
  );
}

export default FormEditAvatar;
