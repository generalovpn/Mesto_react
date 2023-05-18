import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    })
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add" 
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={'Добавить'}
      children={
        <>
          <label className="popup__form">
            <input 
              type="text" 
              name="name"
              id="input-title" 
              className="popup__input popup__input_type_title" 
              placeholder="Название" 
              minLength="2" 
              maxLength="30" 
              required
              onChange={handleNameChange}
              value={name}
            />
            <span className="popup__input-error" id="input-title-error"></span>
            <input 
              type="url" 
              name="link" 
              id="input-link" 
              className="popup__input popup__input_type_link" 
              placeholder="Ссылка на картинку" 
              required
              onChange={handleLinkChange}
              value={link}
            />
            <span className="popup__input-error" id="input-link-error"></span>
          </label>
        </>
      } 
    />
  )
}

export default AddPlacePopup;