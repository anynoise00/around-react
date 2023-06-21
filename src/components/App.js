import React, { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import FormAddPlace from './FormAddPlace';
import FormEditAvatar from './FormEditAvatar';
import FormEditProfile from './FormEditProfile';

function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(undefined);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsConfirmationPopupOpen(false);

    setSelectedCard(undefined);
  }

  return (
    <div className='page'>
      <Header />
      <Main
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        title='Novo local'
        name='add-place'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <FormAddPlace />
      </PopupWithForm>

      <PopupWithForm
        title='Alterar a foto de perfil'
        name='edit-avatar'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <FormEditAvatar />
      </PopupWithForm>

      <PopupWithForm
        title='Editar perfil'
        name='edit-profile'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <FormEditProfile />
      </PopupWithForm>

      <PopupWithForm
        title='Tem certeza?'
        name='confirmation'
        isOpen={isConfirmationPopupOpen}
        onClose={closeAllPopups}
      >
        <button type='submit' className='form__button-submit'>
          Sim
        </button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
