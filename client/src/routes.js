import Admin from "./pages/Admin"; // Імпорт компонента для сторінки адміністратора.
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    BASKET_ROUTE, CONTACT_ROUTE,
    DEVICE_ROUTE,
    FACILITIES_ROUTE,
    LOGIN_ROUTE,
    PROJECTS_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts"; // Імпорт рядкових констант для шляхів.

import Basket from "./pages/Basket"; // Імпорт компонента для сторінки кошика.
import Shop from "./pages/Shop"; // Імпорт компонента для сторінки магазину.
import Auth from "./pages/Auth"; // Імпорт компонента для сторінки авторизації та реєстрації.
import DevicePage from "./pages/DevicePage";
import Project from "./pages/Project";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact"; // Імпорт компонента для сторінки окремого пристрою.

// Масив authRoutes містить маршрути, доступні для авторизованих користувачів.
export const authRoutes = [
    {
        path: ADMIN_ROUTE, // Шлях до сторінки адміністратора.
        Component: Admin // Відповідний компонент для сторінки адміністратора.
    },
    {
        path: BASKET_ROUTE, // Шлях до сторінки кошика.
        Component: Basket // Відповідний компонент для сторінки кошика.
    }
]

// Масив publicRoutes містить загальнодоступні маршрути, доступні всім користувачам.
export const publicRoutes = [
    {
        path: SHOP_ROUTE, // Шлях до сторінки магазину.
        Component: Shop // Відповідний компонент для сторінки магазину.
    },
    {
        path: LOGIN_ROUTE, // Шлях до сторінки авторизації.
        Component: Auth // Відповідний компонент для сторінки авторизації.
    },
    {
        path: REGISTRATION_ROUTE, // Шлях до сторінки реєстрації.
        Component: Auth // Відповідний компонент для сторінки реєстрації.
    },
    {
        path: DEVICE_ROUTE +  '/:id', // Шлях до сторінки окремого пристрою з динамічним параметром `:id`.
        Component: DevicePage // Відповідний компонент для сторінки окремого пристрою.
    },
    {
        path: PROJECTS_ROUTE, // Шлях до сторінки окремого пристрою з динамічним параметром `:id`.
        Component: Project // Відповідний компонент для сторінки окремого пристрою.
    },
    {
        path: ABOUT_ROUTE, // Шлях до сторінки окремого пристрою з динамічним параметром `:id`.
        Component: About // Відповідний компонент для сторінки окремого пристрою.
    },
    {
        path: FACILITIES_ROUTE, // Шлях до сторінки окремого пристрою з динамічним параметром `:id`.
        Component: Facilities // Відповідний компонент для сторінки окремого пристрою.
    },
    {
        path: CONTACT_ROUTE, // Шлях до сторінки окремого пристрою з динамічним параметром `:id`.
        Component: Contact // Відповідний компонент для сторінки окремого пристрою.
    }
]
