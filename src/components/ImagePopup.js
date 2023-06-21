function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.card && 'popup_visible'}`}>
      <div className='image-popup'>
        <img
          src={props.card ? props.card.link : ''}
          alt='Imagem ampliada para melhor visualização da paisagem'
          className='image-popup__image'
        />
        <h2 className='image-popup__title'>
          {props.card ? props.card.name : 'Imagem Qualquer'}
        </h2>
        <button
          type='button'
          className='button popup__button-close'
          onClick={props.onClose}
        />
      </div>

      <div className='popup__overlay' />
    </div>
  );
}

export default ImagePopup;
