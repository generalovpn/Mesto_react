import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete, cards}) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img className="profile__img" src={currentUser.avatar} alt={currentUser.name}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__btn-edit" type="button" onClick={onEditProfile}></button>
          <p className="profile__about-me">{currentUser.about}</p>
        </div>
        <button className="profile__btn-add" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
            <Card 
              link={card.link}
              name={card.name}
              likes={[...card.likes]}
              onCardClick={onCardClick} 
              key={card._id}
              owner={card.owner}
              _id={card._id}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))
        }
      </section>
    </main>
  )
}

export default Main;