import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_image ${card ? "popup_opened" : ""}`}>
      <figure className="popup__figure">
        <button 
          className="popup__close" 
          onClick={onClose}>
        </button>
        <img 
          src={card ? card.link : '#'} 
          alt={card ? card.name : ''} 
          className="popup__photo"
        />
        <figcaption className="popup__caption">
          {card ? card.name : ''}
        </figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup;