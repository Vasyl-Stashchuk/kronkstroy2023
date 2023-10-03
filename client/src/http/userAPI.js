import { $authHost, $host } from "./index";  // Імпортуємо інстанції Axios для виконання HTTP-запитів.
import jwt_decode from "jwt-decode";  // Імпортуємо бібліотеку для декодування JWT-токенів.

// Функція для реєстрації нового користувача
export const registration = async (email, password) => {
    const { data } = await $host.post('api/user/registration', { email, password, role: 'USER' });  // Виконуємо POST-запит для реєстрації користувача з вказаним email, паролем та роллю 'USER'.
    localStorage.setItem('token', data.token);  // Зберігаємо отриманий JWT-токен в локальному сховищі браузера.
    return jwt_decode(data.token);  // Декодуємо отриманий JWT-токен та повертаємо розшифровану інформацію про користувача.
}

// Функція для авторизації користувача
export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password });  // Виконуємо POST-запит для авторизації користувача з вказаним email та паролем.
    localStorage.setItem('token', data.token); // Зберігаємо отриманий JWT-токен в локальному сховищі браузера.
    return jwt_decode(data.token);  // Декодуємо отриманий JWT-токен та повертаємо розшифровану інформацію про користувача.
}

// Функція для перевірки авторизації користувача
export const check = async () => {
    const { data } = await $authHost.post('api/user/auth');  // Виконуємо POST-запит для перевірки авторизації користувача.
    localStorage.setItem('token', data.token)
    console.log(data.token);
    return jwt_decode(data.token);  // Декодуємо отриманий JWT-токен та повертаємо розшифровану інформацію про користувача.
}


