import React, {useContext} from 'react';
import '../css/WtfNav.css';
import navKronk from '../assets/NavKronk.png';  // Імпортуємо зображення для відображення рейтингу.
import {Nav, Navbar} from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    CONTACT_ROUTE,
    FACILITIES_ROUTE,
    LOGIN_ROUTE,
    PROJECTS_ROUTE,
    SHOP_ROUTE
} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode"; // Import your CSS file // <Navbar fixed="top" >


const WtfNav = observer(() => {
    const { user } = useContext(Context);  // Отримуємо дані про користувача з контексту додатка.
    const history = useHistory();  // Отримуємо історію браузера для переходу до інших сторінок.

    const token = localStorage.getItem('token');

    let userRole = '';

    if(token) {
        try {
            const decodedToken = jwt_decode(token);
            userRole = decodedToken.role;
        } catch(e) {
            console.error("Error decoding the token", e);
        }
    }


    const logOut = () => {  // Функція для виходу користувача.
        user.setUser({});  // Очищаємо дані користувача в контексті.
        user.setIsAuth(false);  // Встановлюємо флаг авторизації в `false`.
    }

    return (
        <Navbar sticky="top" className="bg-black navbar-dark" expand="lg">
            <Navbar.Brand href={SHOP_ROUTE}>
                <img
                    src={navKronk}
                    width="45"
                    height="40"
                    className="d-inline-block align-top"
                    alt="KronkStroy"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => history.push(SHOP_ROUTE)}>Головна</Nav.Link>
                    <Nav.Link onClick={() => history.push(ABOUT_ROUTE)}>Про нас</Nav.Link>
                    <Nav.Link onClick={() => history.push(PROJECTS_ROUTE)} >Проекти</Nav.Link>
                    <Nav.Link onClick={() => history.push(FACILITIES_ROUTE)}>Послуги</Nav.Link>
                    <Nav.Link onClick={() => history.push(CONTACT_ROUTE)}>Контакти</Nav.Link>
                    {user.isAuth ?  // Умова для перевірки, чи користувач авторизований
                        <Nav className="ml-auto" style={{ color: 'white' }}>  {/* Навігаційне меню, розташоване праворуч */}
                            {userRole === 'ADMIN' && user.isAuth ? (
                                // Відображаємо кнопку адмін-панелі тільки для адміністраторів, які авторизовані
                                <Nav.Link
                                    variant={"outline-light"}
                                    onClick={() => history.push(ADMIN_ROUTE)}  /* Перехід на сторінку адміністратора */
                                >
                                    Адмін Панель
                                </Nav.Link>
                            ) : null}
                            <Nav.Link variant={"outline-light"}
                                    onClick={() => logOut()}  // Виклик функції для виходу користувача
                                    className="ml-2"  // Відступ для другої кнопки
                            >
                                Вийти
                            </Nav.Link>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{ color: 'white' }}>  {/* Навігаційне меню для гостей */}
                            {/*<Nav.Link variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизація</Nav.Link>  /!* Перехід на сторінку авторизації *!/*/}
                        </Nav>
                    }
                </Nav>



            </Navbar.Collapse>
        </Navbar>
    );
});

export default WtfNav;
