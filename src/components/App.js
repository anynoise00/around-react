import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className='page'>
      <Header />
      <Main />
      <Footer />

      <div id='popup-edit-profile' className='popup'>
        <form className='form form_type_edit-profile' noValidate>
          <button type='button' className='button popup__button-close'></button>
          <h2 className='form__header'>Editar perfil</h2>
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
            <span className='form__input-error profile-name-input-error'></span>
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
            <span className='form__input-error profile-description-input-error'></span>
          </div>
          <button
            type='submit'
            className='form__button-submit form__button-submit_inactive'
          >
            Salvar
          </button>
        </form>
        <div className='popup__overlay'></div>
      </div>

      <div id='popup-add-image' className='popup'>
        <form className='form form_type_add-image' noValidate>
          <button type='button' className='button popup__button-close'></button>
          <h2 className='form__header'>Novo local</h2>
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
            <span className='form__input-error image-title-input-error'></span>
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
            <span className='form__input-error image-link-input-error'></span>
          </div>
          <button type='submit' className='form__button-submit'>
            Criar
          </button>
        </form>
        <div className='popup__overlay'></div>
      </div>

      <div id='popup-edit-avatar' className='popup'>
        <form className='form form_type_edit-avatar' noValidate>
          <button type='button' className='button popup__button-close'></button>
          <h2 className='form__header'>Alterar a foto de perfil</h2>
          <div className='form__input-area'>
            <input
              type='url'
              name='link'
              id='avatar-link-input'
              className='form__field'
              placeholder='Link da imagem'
              required
            />
            <span className='form__input-error avatar-link-input-error'></span>
          </div>
          <button type='submit' className='form__button-submit'>
            Salvar
          </button>
        </form>
        <div className='popup__overlay'></div>
      </div>

      <div id='popup-confirmation' className='popup'>
        <form className='form form_type_add-image' noValidate>
          <button type='button' className='button popup__button-close'></button>
          <h2 className='form__header'>Tem certeza?</h2>
          <button
            type='submit'
            className='form__button-submit popup__button-confirm'
          >
            Sim
          </button>
        </form>
        <div className='popup__overlay'></div>
      </div>

      <div id='popup-image-view' className='popup'>
        <div className='image-popup'>
          <button type='button' className='button popup__button-close'></button>
          <img
            src=''
            alt='Imagem ampliada para melhor visualização da paisagem'
            className='image-popup__image'
          />
          <h2 className='image-popup__title'>Imagem Qualquer</h2>
        </div>

        <div className='popup__overlay'></div>
      </div>

      <template id='card-template'>
        <li className='card'>
          <button type='button' className='button card__button-delete'></button>
          <button type='button' className='card__button-view-image'>
            <img alt='--' className='card__image' />
          </button>
          <div className='card__info-container'>
            <h2 className='card__title'></h2>
            <button type='button' className='button card__button-like'></button>
            <p className='card__like-counter'>0</p>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
