import api from '../utils/api';
import { useState, useEffect } from 'react';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserData().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });

    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

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

      <ul className='cards'>
        {cards.map((c) => (
          <li className='card' key={c._id}>
            <button type='button' className='button card__button-delete' />
            <div
              className='card__image'
              style={{ backgroundImage: `url(${c.link})` }}
            />
            <div className='card__info-container'>
              <h2 className='card__title'>{c.name}</h2>
              <div className='card__like-container'>
                <div className='button card__like-button' />
                <p className='card__like-counter'>{c.likes.length}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;
