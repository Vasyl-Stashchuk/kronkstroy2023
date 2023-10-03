import React from 'react';  // Імпортуємо бібліотеку React для створення компонентів.
import { Card, Col, Image } from "react-bootstrap";  // Імпортуємо компоненти Bootstrap для створення карток та колонок.
import star from '../assets/star.png';  // Імпортуємо зображення зірки для рейтингу.
import { useHistory } from "react-router-dom";  // Імпортуємо функцію для роботи з історією браузера.
import { DEVICE_ROUTE } from "../utils/consts";  // Імпортуємо константу DEVICE_ROUTE з файлу consts.js.
import '../css/Project.css';

const DeviceItem = ({ device }) => {
    const history = useHistory();  // Отримуємо історію браузера для переходу до сторінки пристрою.

    return (
        <div className="device-item" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            {/* Картка пристрою */}
                <div className="device-img">
                    <img href="#" src={process.env.REACT_APP_API_URL + device.img} />
                </div>
            {/* Зображення пристрою */}

                {/* Інформація про пристрій (назва та рейтинг) */}

                    <p>{device.name}</p>  {/* Тут може бути ім'я бренду або інша інформація. */}

                    <hr className="project-hr"/>

                {/* Назва пристрою */}
                {/*<div>{device.name}</div>*/}
        </div>
    );
};

export default DeviceItem;  // Експортуємо компонент DeviceItem для використання в інших частинах програми.
