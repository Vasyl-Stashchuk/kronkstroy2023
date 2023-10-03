import React, { useContext } from 'react';  // Імпортуємо необхідні бібліотеки та модулі React.
import { observer } from "mobx-react-lite";  // Імпортуємо бібліотеку для створення спостерігачів MobX.
import { Context } from "../index";  // Імпортуємо контекст додатка з кореневого файлу.
import { ListGroup } from "react-bootstrap";  // Імпортуємо компоненти Bootstrap для створення списку.
const TypeBar = observer(() => {
    const { device } = useContext(Context);  // Отримуємо дані про типи пристроїв та вибраний тип з контексту додатка.

    return (
        <ListGroup>  {/* Відображення списку типів пристроїв */}
            {device.types.map(type =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}  // Змінюємо курсор при наведенні для елементів, які можна клікнути.
                    active={type.id === device.selectedType.id}  // Позначаємо вибраний тип активним (за замовчуванням) за допомогою Bootstrap.
                    onClick={() => device.setSelectedType(type)}  // Обробник кліку для вибору типу пристрою.
                    key={type.id}  // Унікальний ключ для кожного елемента списку (React вимагає унікальних ключів).
                >
                    {type.name}  {/* Відображення назви типу пристрою */}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;  // Експортуємо компонент TypeBar для використання в інших частинах програми.
