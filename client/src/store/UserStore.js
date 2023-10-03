import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        // Ініціалізуємо початкові значення змінних для стану аутентифікації та користувача.
        this._isAuth = {}  // Флаг, що вказує на те, чи користувач аутентифікований.
        this._user = {}       // Об'єкт, що містить дані користувача.

        makeAutoObservable(this)  // Робимо всі поля спостережуваними за допомогою MobX.
    }

    // Методи для встановлення значень полів.

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    // Геттери для доступу до даних.

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}
