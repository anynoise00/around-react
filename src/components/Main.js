import avatar from '../images/profile_avatar.jpg';

function Main() {
  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-container'>
          <img
            src={avatar}
            alt='Avatar do Usuário'
            className='profile__avatar'
          />
          <div className='profile__avatar-overlay' />
        </div>
        <div className='profile__info'>
          <h2 className='profile__name'>Lorem Ipsum</h2>
          <p className='profile__description'>Dolor, Sit & Amet</p>
          <button type='button' className='button profile__button-edit' />
        </div>
        <button type='button' className='button profile__button-add' />
      </section>

      <ul className='cards' />
    </main>
  );
}

export default Main;
