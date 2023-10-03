import React, { useContext } from 'react';  // Імпортуємо необхідні бібліотеки та модулі React.
import { observer } from "mobx-react-lite";  // Імпортуємо бібліотеку для створення спостерігачів MobX.
import { Context } from "../index";  // Імпортуємо контекст додатка з кореневого файлу.
import { Row } from "react-bootstrap";  // Імпортуємо компоненти Bootstrap для створення рядків.
import DeviceItem from "./DeviceItem";  // Імпортуємо компонент DeviceItem для відображення окремих пристроїв.
import '../css/Project.css';
import '../css/index.css';

const DeviceList = observer(() => {
    const { device } = useContext(Context);  // Отримуємо дані про пристрої з контексту додатка.

    return (
        <div className="device-list cont">

            {/* Мапимо масив пристроїв та створюємо окремий компонент DeviceItem для кожного пристрою */}
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device} />  /* Встановлюємо унікальний ключ та передаємо дані про пристрій */
                )}
        </div>
    );
});

export default DeviceList;  // Експортуємо компонент DeviceList для використання в інших частинах програми.
