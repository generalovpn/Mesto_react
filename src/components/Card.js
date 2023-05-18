import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({onCardClick, link, name, likes, owner, _id, onCardLike, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);

  function handleClick() {
    onCardClick({link, name});
  }

  function handleLikeClick() { 
    onCardLike(likes, _id);
  }

  function handleDeleteClick() {
    onCardDelete(_id);
  }

  const isOwn = owner._id === currentUser._id;
  const isLiked = likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__heart ${isLiked && 'element__heart_active'}`;

  return (
    <article className="element">
      {isOwn && <button className="element__btn-delete" aria-label="удалить" type="button" onClick={handleDeleteClick}></button>}
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
          <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <span className="element__likes-count">
            {likes.length}
          </span>
        </div>
      </div>
    </article>
  )
}

export default Card;