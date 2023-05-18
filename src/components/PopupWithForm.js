import React from "react";

function PopupWithForm({name, title, isOpen, onClose, children, onSubmit, buttonText}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="закрыть" onClick={onClose} />
        <h2 className="popup__name">{title}</h2>
        <form 
          className="popup__form" 
          name={`form-${name}`}
          onSubmit={onSubmit}>
          {children}
          <button type="submit" className="popup__btn-save">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;