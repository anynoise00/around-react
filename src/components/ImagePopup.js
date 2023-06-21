function ImagePopup(props) {
  return (
    <div id='popup-image-view' className='popup'>
      <div className='image-popup'>
        <button type='button' className='button popup__button-close' />
        <img
          src=''
          alt='Imagem ampliada para melhor visualização da paisagem'
          className='image-popup__image'
        />
        <h2 className='image-popup__title'>Imagem Qualquer</h2>
      </div>

      <div className='popup__overlay' />
    </div>
  );
}

export default ImagePopup;
