import axios from "axios";  // Імпортуємо бібліотеку Axios для виконання HTTP-запитів.

// Створюємо інстанцію Axios для використання звичайних HTTP-запитів (без авторизації).
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL  // Встановлюємо базову URL-адресу для всіх запитів, яка зчитується з змінної оточення.
})

// Створюємо інстанцію Axios для використання авторизованих HTTP-запитів.
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL  // Встановлюємо базову URL-адресу для всіх авторизованих запитів, яка зчитується з змінної оточення.
})

// Створюємо інтерцептор для додавання авторизаційного заголовка до кожного авторизованого запиту.
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;  // Додаємо JWT-токен збережений в локальному сховищі до заголовку запиту.
    return config;  // Повертаємо модифікований конфігураційний об'єкт для запиту.
}



$authHost.interceptors.request.use(authInterceptor);  // Додаємо інтерцептор до інстанції $authHost для авторизованих запитів.

export {
    $host,       // Експортуємо інстанцію $host для використання в звичайних запитах.
    $authHost    // Експортуємо інстанцію $authHost для використання авторизованих запитах.
}

