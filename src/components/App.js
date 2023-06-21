import { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleCardClick() {
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className='page'>
      <Header />
      <Main
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onCardClick={''}
      />
      <Footer />

      <PopupWithForm
        title='Novo local'
        name='add-place'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
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

      <PopupWithForm
        title='Alterar a foto de perfil'
        name='edit-avatar'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
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

      <PopupWithForm
        title='Editar perfil'
        name='edit-profile'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
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

      <PopupWithForm
        title='Tem certeza?'
        name='confirmation'
        isOpen={isConfirmationPopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
