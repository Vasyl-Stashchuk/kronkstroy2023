import React, {useContext, useEffect, useRef} from 'react';  // Імпортуємо необхідні бібліотеки та модулі React.
import { observer } from "mobx-react-lite";  // Імпортуємо бібліотеку для створення спостерігачів MobX.
import { Context } from "../index";  // Імпортуємо контекст додатка з кореневого файлу.
import {Button, Card, Row} from "react-bootstrap";  // Імпортуємо компоненти Bootstrap для створення карток та рядків.
import '../css/BrandBar.css';
import '../css/index.css';

const BrandBarAlt = observer(() => {
    const { device } = useContext(Context);  // Отримуємо дані про бренди та вибраний бренд з контексту додатка.

    // Function to handle showing all devices.
    const showAllDevices = () => {
        device.setSelectedType({}); // Clear selected type to show all devices.
        device.setSelectedBrand({}); // Clear selected brand to show all devices.
    };

    const buttonRef = useRef(null);

    // 2. Встановіть фокус на кнопку, коли компонент вставлено
    // useEffect(() => {
    //     buttonRef.current.focus();
    // }, []);



    return (
        <div className="brand-bar-alt">
            <button
                className={device.selectedBrand.id ? "passive-button" : "active-button"}
                onClick={showAllDevices}
            >
                Всі проекти
            </button>
            {device.brands.map(brand =>
                <button
                    key={brand.id}
                    className={brand.id === device.selectedBrand.id ? "active-button" : "passive-button"}
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </button>
            )}
        </div>
    );
});

export default BrandBarAlt;  // Експортуємо компонент BrandBar для використання в інших частинах програми.
