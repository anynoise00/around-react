import api from '../utils/api';
import { useState, useEffect } from 'react';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    api.getUserData().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  });

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
          <h2 className='profile__name'>
            {userName ? userName : 'Lorem Ipsum'}
          </h2>
          <p className='profile__description'>
            {userDescription ? userDescription : 'Dolor, Sit & Amet'}
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

      <ul className='cards' />
    </main>
  );
}

export default Main;
