import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card){
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name="edit" 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__form">
              <input 
                type="text" 
                name="name" 
                id="input-name" 
                minLength="2" 
                maxLength="40" 
                className="popup__input popup__input_type_name" placeholder="Имя" 
                required />
              <span className="popup__input-error" id="input-name-error"></span>
              <input 
                type="text" 
                name="about" 
                id="input-job" 
                className="popup__input popup__input_type_job" 
                placeholder="О себе" 
                minLength="2" 
                maxLength="200" 
                required />
              <span className="popup__input-error" id="input-job-error"></span>
            </label>
          </>
        }
      />

      <PopupWithForm
        title="Новое место"
        name="add" 
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__form">
              <input 
                type="text" 
                name="name"
                id="input-title" 
                className="popup__input popup__input_type_title" placeholder="Название" 
                minLength="2" 
                maxLength="30" 
                required />
              <span className="popup__input-error" id="input-title-error"></span>
              <input 
                type="url" 
                name="link" 
                id="input-link" 
                className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" 
                required/>
              <span className="popup__input-error" id="input-link-error"></span>
            </label>
          </>
        } 
      />

      <PopupWithForm
        title="Обновить аватар"
        name="avatar" 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__form">
              <input 
                id="input-avatar"
                type="url" 
                className="popup__input popup__input_type_link" name="avatar" 
                placeholder="Ссылка на картинку" 
                required />
              <span className="popup__input-error" id="input-avatar-error"></span>
            </label>
          </>
        }
      />

      <PopupWithForm
        name="confirmation"
        title="Вы уверены?"
        isOpen={false}
      />

      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups}
      />

    </div>
  )
}

export default App;