import React, { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import FormInputContainer from './FormInputContainer';

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

  function handleFormAddPlaceSubmit(data) {}
  function handleFormEditAvatarSubmit(data) {}
  function handleFormEditProfileSubmit(data) {}

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
        buttonText='Adicionar'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleFormAddPlaceSubmit}
      >
        <FormInputContainer name='title'>
          <input
            type='text'
            className='form__field'
            placeholder='Título'
            minLength='2'
            maxLength='30'
            required
          />
        </FormInputContainer>
        <FormInputContainer name='link'>
          <input
            type='url'
            className='form__field'
            placeholder='Link da imagem'
            required
          />
        </FormInputContainer>
      </PopupWithForm>

      <PopupWithForm
        title='Alterar a foto de perfil'
        name='edit-avatar'
        buttonText='Salvar'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleFormEditAvatarSubmit}
      >
        <FormInputContainer name='link'>
          <input
            type='url'
            className='form__field'
            placeholder='Link da imagem'
            required
          />
        </FormInputContainer>
      </PopupWithForm>

      <PopupWithForm
        title='Editar perfil'
        name='edit-profile'
        buttonText='Salvar'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleFormEditProfileSubmit}
      >
        <FormInputContainer name='name'>
          <input
            type='text'
            className='form__field'
            placeholder='Seu nome'
            minLength='2'
            maxLength='40'
            required
          />
        </FormInputContainer>
        <FormInputContainer name='about'>
          <input
            type='text'
            className='form__field'
            placeholder='Uma breve descrição sobre você'
            minLength='2'
            maxLength='200'
            required
          />
        </FormInputContainer>
      </PopupWithForm>

      <PopupWithForm
        title='Tem certeza?'
        name='confirmation'
        isOpen={isConfirmationPopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
