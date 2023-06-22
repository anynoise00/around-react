import React, { useState, useEffect } from 'react';
import Card from './Card';
import PopupWithForm from './PopupWithForm';
import FormInputContainer from './FormInputContainer';
import api from '../utils/api';

function Main(props) {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserData().then((res) => {
      setUserId(res._id);
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });

    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  function handleCardLike(cardId, isLiked) {
    const promise = isLiked ? api.dislikeCard(cardId) : api.likeCard(cardId);
    promise.then((res) => {
      setCards(
        cards.map((c) => {
          const equal = c._id === res._id;
          return equal ? res : c;
        })
      );
    });
  }

  function handleCardDelete(cardId) {
    api.deleteCard(cardId).then((res) => {
      setCards(
        cards.filter((c) => {
          return !(c._id === cardId);
        })
      );
    });
  }

  function handleFormAddPlaceSubmit(data) {
    api.addCard(data).then((res) => setCards([res, ...cards]));
  }
  function handleFormEditAvatarSubmit(data) {
    console.log(data);
  }
  function handleFormEditProfileSubmit(data) {
    console.log(data);
  }

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-container'>
          <div
            className='profile__avatar'
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <div
            className='profile__avatar-overlay'
            onClick={props.onEditAvatarClick}
          />
        </div>
        <div className='profile__info'>
          <h2 className='profile__name'>{userName || 'Lorem Ipsum'}</h2>
          <p className='profile__description'>
            {userDescription || 'Dolor, Sit & Amet'}
          </p>
          <button
            type='button'
            className='button profile__button-edit'
            onClick={props.onEditProfileClick}
          />
        </div>
        <button
          type='button'
          className='button profile__button-add'
          onClick={props.onAddPlaceClick}
        />
      </section>

      <ul className='cards'>
        {cards.map((c) => (
          <Card
            card={c}
            key={`card-${c._id}`}
            isLiked={c.likes.some((user) => user._id === userId)}
            isOwner={c.owner._id === userId}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </ul>

      <PopupWithForm
        title='Novo local'
        name='add-place'
        buttonText='Adicionar'
        isOpen={props.isAddPlacePopupOpen}
        onClose={props.closeAllPopups}
        onSubmit={handleFormAddPlaceSubmit}
      >
        <FormInputContainer name='name'>
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
        isOpen={props.isEditAvatarPopupOpen}
        onClose={props.closeAllPopups}
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
        isOpen={props.isEditProfilePopupOpen}
        onClose={props.closeAllPopups}
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
        isOpen={props.isConfirmationPopupOpen}
        onClose={props.closeAllPopups}
      />
    </main>
  );
}

export default Main;
