import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div className='page'>
      <Header />
      <Main />
      <Footer />

      <PopupWithForm title='Alterar a foto de perfil' name='edit-avatar'>
        <div className='form__input-area'>
          <input
            type='url'
            name='link'
            id='avatar-link-input'
            className='form__field'
            placeholder='Link da imagem'
            required
          />
          <span className='form__input-error avatar-link-input-error' />
        </div>
      </PopupWithForm>

      <PopupWithForm title='Editar perfil' name='edit-profile'>
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
          />
          <span className='form__input-error profile-description-input-error' />
        </div>
      </PopupWithForm>

      <PopupWithForm title='Novo local' name='add-place'>
        <div className='form__input-area'>
          <input
            type='text'
            name='title'
            id='image-title-input'
            className='form__field'
            placeholder='Título'
            minLength='2'
            maxLength='30'
            required
          />
          <span className='form__input-error image-title-input-error' />
        </div>
        <div className='form__input-area'>
          <input
            type='url'
            name='link'
            id='image-link-input'
            className='form__field'
            placeholder='Link da imagem'
            required
          />
          <span className='form__input-error image-link-input-error' />
        </div>
      </PopupWithForm>

      <PopupWithForm title='Tem certeza?' name='confirmation' />

      {/* <div id='popup-confirmation' className='popup'>
        <form className='form form_type_add-image' noValidate>
          <button type='button' className='button popup__button-close' />
          <h2 className='form__header'>Tem certeza?</h2>
          <button
            type='submit'
            className='form__button-submit popup__button-confirm'
          >
            Sim
          </button>
        </form>
        <div className='popup__overlay' />
      </div> */}

      <div id='popup-image-view' className='popup'>
        <div className='image-popup'>
          <button type='button' className='button popup__button-close' />
          <img
            src=''
            alt='Imagem ampliada para melhor visualização da paisagem'
            className='image-popup__image'
          />
          <h2 className='image-popup__title'>Imagem Qualquer</h2>
        </div>

        <div className='popup__overlay' />
      </div>

      <template id='card-template'>
        <li className='card'>
          <button type='button' className='button card__button-delete' />
          <button type='button' className='card__button-view-image'>
            <img alt='--' className='card__image' />
          </button>
          <div className='card__info-container'>
            <h2 className='card__title'>Card Title</h2>
            <button type='button' className='button card__button-like' />
            <p className='card__like-counter'>0</p>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
