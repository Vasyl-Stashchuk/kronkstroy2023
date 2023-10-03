import { $authHost, $host } from "./index";  // Імпортуємо налаштовані інстанції Axios для виконання HTTP-запитів.
  // Імпортуємо бібліотеку для декодування JWT-токенів.

// Функція для створення нового типу пристрою
export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type);  // Виконуємо POST-запит з авторизацією для створення типу пристрою.
    return data;  // Повертаємо дані, отримані з сервера.
}

export const deleteType = async (typeId) => {
    try {
        const response = await $authHost.delete(`api/type/${typeId}`);
        return response.data; // Опціонально, поверніть дані, якщо потрібно.
    } catch (error) {
        throw error; // Обробка помилки буде виконуватися на клієнтській стороні.
    }
}

// Функція для отримання списку типів пристроїв
export const fetchTypes = async () => {
    const { data } = await $host.get('api/type');  // Виконуємо GET-запит для отримання списку типів пристроїв.
    return data;  // Повертаємо отримані дані.
}

// Функція для створення нового бренду
export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand);  // Виконуємо POST-запит з авторизацією для створення бренду.
    return data;  // Повертаємо дані, отримані з сервера.
}

// Функція для отримання списку брендів
export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand');  // Виконуємо GET-запит для отримання списку брендів.
    return data;  // Повертаємо отримані дані.
}

// Функція для створення нового пристрою
export const createDevice = async (device) => {
    console.log(device)
    const { data } = await $authHost.post('api/device', device);  // Виконуємо POST-запит з авторизацією для створення пристрою.
    return data;  // Повертаємо дані, отримані з сервера.
}

// Функція для отримання списку пристроїв з можливістю фільтрації за типом, брендом, сторінкою та лімітом на сторінку
export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
    const { data } = await $host.get('api/device', {
        params: {
            typeId,  // Фільтр за типом пристрою
            brandId,  // Фільтр за брендом
            page,  // Номер сторінки
            limit  // Ліміт на сторінку
        }
    });  // Виконуємо GET-запит для отримання списку пристроїв з фільтрацією та пагінацією.
    return data;  // Повертаємо отримані дані.
}

// Функція для отримання інформації про один пристрій за його ідентифікатором
export const fetchOneDevice = async (id) => {
    const { data } = await $host.get('api/device/' + id);  // Виконуємо GET-запит для отримання інформації про пристрій за його ідентифікатором.
    return data;  // Повертаємо отримані дані.
}

export const deleteDevice = async (deviceId) => {
    try {
        const response = await $authHost.delete(`api/device/${deviceId}`);
        return response.data; // Опціонально, поверніть дані, якщо потрібно.
    } catch (error) {
        throw error; // Обробка помилки буде виконуватися на клієнтській стороні.
    }
}