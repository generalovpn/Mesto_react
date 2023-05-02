import React from "react";

function Card({onCardClick, link, name, likes}) {

  function handleClick() {
    onCardClick({link, name});
  }

  return (
    <article className="element">
      <button className="element__btn-delete"></button>
      <img 
        className="element__picture" 
        src={link} 
        alt={name} 
        onClick={handleClick} 
      />
      <div className="element__group">
        <h2 className="element__title">
          {name}
        </h2>
        <div className="element__like-group">
          <button className="element__heart"></button>
          <span className="element__likes-count">
            {likes.length}
          </span>
        </div>
      </div>
    </article>
  )
}

export default Card;