import React from "react";
import { api } from "../utils/api";
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => alert(err))
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards([...res])
      })
      .catch((err) => alert(err))
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img className="profile__img" src={userAvatar} alt={userName}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__btn-edit" type="button" onClick={onEditProfile}></button>
          <p className="profile__about-me">{userDescription}</p>
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
            />
          ))
        }
      </section>
    </main>
  )
}

export default Main;