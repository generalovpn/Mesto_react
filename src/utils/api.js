class Api {
	constructor({baseUrl, headers}) {
		this._url = baseUrl;
		this._headers = headers;
	}
	
	  /**Проверить на ошибки */
	_checkResponse(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Что-то пошло не так! Ошибка: ${res.status}`);
	};
	
	  /**Запросить данные с сервера */
	getInitialCards() {
		return fetch(`${this._url}/cards`, {
			method: "GET",
			headers: this._headers,
		})
		.then(res => this._checkResponse(res))
	}
	
	  /**Функция добавления новой карточки на сервер */
	addNewCard(data) {
		return fetch(`${this._url}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: data.name,
				link: data.link,
			}),
		})
		.then(res => this._checkResponse(res))
	};
	
	/**Функция получения данных пользователя с сервера*/
	getUserInfo() {
		return fetch(`${this._url}/users/me`, {
			headers: this._headers,
		})
		.then(res => this._checkResponse(res))
	}
	
	/**Функция передачи данных пользователя с сервера */
	setUserInfo(data) {
		return fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: data.name,
				about: data.about,
			}),
		})
		.then(res => this._checkResponse(res))
	}
	
	/**Функция передачи на сервер нового аватара */
	setUserAvatar(data) {
		return fetch(`${this._url}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: data.avatar,
			}),
		})
		.then(res => this._checkResponse(res))
	}
	
	/**Функция удаления карточки с сервера */
	deleteCard(cardId) {
		return fetch(`${this._url}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this._headers,
		})
		.then(res => this._checkResponse(res))
	}
	
	/**Функция отправки лайка на сервер */
	putCardLike(cardId) {
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'PUT',
			headers: this._headers,
		})
		.then(res => this._checkResponse(res))
	}
	
	/**Функция удаления лайка с сервера */
	deleteCardLike(cardId) {
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'DELETE',
			headers: this._headers,
		})
		.then(res => this._checkResponse(res))
	}
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-63",
  headers: {
    authorization: "a9110206-e08b-4912-9750-2ef951bd76b4",
    "Content-Type": "application/json",
  },
});
