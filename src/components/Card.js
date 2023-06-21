function Card(props) {
  return (
    <li className='card' key={props.card._id}>
      <button type='button' className='button card__button-delete' />
      <div
        className='card__image'
        style={{ backgroundImage: `url(${props.card.link})` }}
      />
      <div className='card__info-container'>
        <h2 className='card__title'>{props.card.name}</h2>
        <div className='card__like-container'>
          <div className='button card__like-button' />
          <p className='card__like-counter'>{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
