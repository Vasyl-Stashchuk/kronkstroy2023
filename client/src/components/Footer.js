import React from 'react';
import '../css/Footer.css';
import '../css/index.css';
import logo from '../assets/Kronk.svg';  // Імпортуємо зображення для відображення рейтингу.
import inst from '../assets/icons8-instagram-250.png';  // Імпортуємо зображення для відображення рейтингу.
import face from '../assets/icons8-facebook-250.png';
import {ABOUT_ROUTE, CONTACT_ROUTE, FACILITIES_ROUTE, PROJECTS_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";  // Імпортуємо зображення для відображення рейтингу.



function Footer() {

    const history = useHistory();  // Отримуємо історію браузера для переходу до інших сторінок.

    return (
        <footer>
        <div className="footer cont">
            <div className="footer-imgs">
                <div>
                    <p className="img-footer">
                        <a href="index.html"><img src={logo} alt="Kronk Logo" /></a>
                    </p>
                </div>
                <div className="imgs-footer">
                    <a href="https://www.facebook.com/KronkStroyFacade/">
                        <img src={face} alt="Facebook Icon" />
                    </a>
                    <a href="https://www.instagram.com/kronkstroy/">
                        <img src={inst} alt="Instagram Icon" />
                    </a>
                </div>
            </div>
            <div>
                <div className="footer-text">
                    <h3>Навігація</h3>
                    <hr className="super-hr" />
                </div>
                <div className="footer-bar">
                    <a href="#" onClick={() => history.push(SHOP_ROUTE)}>Головна</a>
                    <a href="#" onClick={() => history.push(ABOUT_ROUTE)}>Про нас </a>
                    <a href="#" onClick={() => history.push(PROJECTS_ROUTE)}>Проекти</a>
                    <a href="#" onClick={() => history.push(FACILITIES_ROUTE)}>Послуги</a>
                    <a href="#" onClick={() => history.push(CONTACT_ROUTE)}>Контакти</a>
                </div>
                {/*<div className="footer-bar">*/}
                {/*    <a href={SHOP_ROUTE} >Головна</a>*/}
                {/*    <a href={ABOUT_ROUTE} >Про нас </a>*/}
                {/*    <a href={PROJECTS_ROUTE} >Проекти</a>*/}
                {/*    <a href={FACILITIES_ROUTE} >Послуги</a>*/}
                {/*    <a href={CONTACT_ROUTE} >Контакти</a>*/}
                {/*</div>*/}
            </div>
            <div>
                <div className="footer-text">
                    <h3>Локація</h3>
                    <hr className="super-hr" />
                    <h4>м. Дніпро, Вул. Академика Белелюбского (бывш. Краснозаводская) Дом №54-а</h4>
                    <h4>
                        +38 056 736-30-55
                        <br />
                        +38 096 692-64-53
                    </h4>
                    <h4>kronkstroy@gmail.com</h4>
                </div>
            </div>
        </div>
            <div className="footer-down">
                <p>© 2022, Kronk Stroy Systems</p>
            </div>

        </footer>
    );
}

export default Footer;
