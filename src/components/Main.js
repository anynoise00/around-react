import avatar from '../images/profile_avatar.jpg';

function Main(props) {
  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-container'>
          <img
            src={avatar}
            alt='Avatar do Usuário'
            className='profile__avatar'
          />
          <div
            className='profile__avatar-overlay'
            onClick={props.onEditAvatarClick}
          />
        </div>
        <div className='profile__info'>
          <h2 className='profile__name'>Lorem Ipsum</h2>
          <p className='profile__description'>Dolor, Sit & Amet</p>
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
