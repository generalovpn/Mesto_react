import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, about: description });
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit" 
      isOpen={isOpen} 
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={'Сохранить'}
      children={
        <>
          <label className="popup__form">
            <input 
              type="text" 
              name="name" 
              id="input-name" 
              minLength="2" 
              maxLength="40" 
              className="popup__input popup__input_type_name" 
              placeholder="Укажите имя" 
              required
              onChange={handleNameChange}
              value={name || ''}
            />
            <span className="popup__input-error" id="input-name-error"></span>
            <input 
              type="text" 
              name="about" 
              id="input-job" 
              className="popup__input popup__input_type_job" 
              placeholder="О себе" 
              minLength="2" 
              maxLength="200" 
              required
              onChange={handleDescriptionChange}
              value={description || ''}
              />
            <span className="popup__input-error"id="input-job-error"></span>
          </label>
        </>
      }
    />
  )
}

export default EditProfilePopup;