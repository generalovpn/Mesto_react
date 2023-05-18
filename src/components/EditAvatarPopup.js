import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar" 
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={'Сохранить'}
      children={
        <label className="popup__form">
          <input
            id="input-avatar"
            type="url" 
            className="popup__inputpopup__input_type_link" 
            name="avatar" 
            placeholder="Ссылка на картинку" 
            required
            ref={avatarRef}
          />
          <span className="popup__input-error" id="input-avatar-error"></span>
        </label>
      }
    />
  )
}

export default EditAvatarPopup;