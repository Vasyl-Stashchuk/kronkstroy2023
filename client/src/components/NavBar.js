import React, { useContext } from "react";  // Імпортуємо необхідні бібліотеки та модулі React.
import { Context } from "../index";  // Імпортуємо контекст додатка з кореневого файлу.
import { Button, Container, Nav, Navbar } from "react-bootstrap";  // Імпортуємо компоненти Bootstrap для створення навігаційного меню.
import { NavLink } from "react-router-dom";  // Імпортуємо компонент NavLink для роботи з маршрутами.
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";  // Імпортуємо константи для маршрутів та інші корисні константи.
import { observer } from "mobx-react-lite";  // Імпортуємо бібліотеку для створення спостерігачів MobX.
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";  // Імпортуємо функцію для роботи з історією браузера.

const NavBar = observer(() => {
    const { user } = useContext(Context);  // Отримуємо дані про користувача з контексту додатка.
    const history = useHistory();  // Отримуємо історію браузера для переходу до інших сторінок.

    const token = localStorage.getItem('token'); // Отримуємо JWT-токен з localStorage
    const decodedToken = jwt_decode(token); // Декодуємо JWT-токен
    const userRole = decodedToken.role; // Отримуємо роль користувача з декодованого токена


    const logOut = () => {  // Функція для виходу користувача.
        user.setUser({});  // Очищаємо дані користувача в контексті.
        user.setIsAuth(false);  // Встановлюємо флаг авторизації в `false`.
    }

    return (
        <Navbar bg="dark" variant="dark">  {/* Навігаційна панель з темним фоном */}
            <Container>  {/* Контейнер для розміщення елементів навігаційної панелі */}
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>KronkStroy</NavLink>  {/* Заголовок і посилання на головну сторінку */}
                {user.isAuth ?  // Умова для перевірки, чи користувач авторизований
                    <Nav className="ml-auto" style={{ color: 'white' }}>  {/* Навігаційне меню, розташоване праворуч */}
                        {userRole === 'ADMIN' && user.isAuth ? (
                            // Відображаємо кнопку адмін-панелі тільки для адміністраторів, які авторизовані
                            <Button
                                variant={"outline-light"}
                                onClick={() => history.push(ADMIN_ROUTE)}  /* Перехід на сторінку адміністратора */
                            >
                                Адмін Панель
                            </Button>
                        ) : null}
                        <Button variant={"outline-light"}
                                onClick={() => logOut()}  // Виклик функції для виходу користувача
                                className="ml-2"  // Відступ для другої кнопки
                        >
                            Вийти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>  {/* Навігаційне меню для гостей */}
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизація</Button>  {/* Перехід на сторінку авторизації */}
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;  // Експортуємо компонент NavBar для використання в інших частинах програми.
