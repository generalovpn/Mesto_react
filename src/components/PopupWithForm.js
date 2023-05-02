import React from "react";

function PopupWithForm({name, title, isOpen, onClose, children}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <h2 className="popup__name">{title}</h2>
        <form className="popup__form popup__form_type_avatar" name={`form-${name}`}>
          {children}
          <button type="submit" className="popup__btn-save">Сохранить</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;