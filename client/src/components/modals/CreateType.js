import React, { useState } from 'react';  // Імпортуємо необхідні бібліотеки та модулі React.
import { Button, Form, Modal } from "react-bootstrap";  // Імпортуємо компоненти Bootstrap для створення модального вікна та інших елементів інтерфейсу.
import { createType } from "../../http/deviceApi";  // Імпортуємо функцію для створення типу пристрою на сервері.

const CreateType = ({ show, onHide }) => {
    const [value, setValue] = useState('');  // Встановлюємо початковий стан для поля вводу назви типу.

    const addType = () => {  // Функція для додавання нового типу.
        createType({ name: value }).then(data => {  // Викликаємо функцію createType з передачею об'єкта {name: value} на сервер.
            setValue('');  // Очищаємо поле вводу після успішного додавання типу.
            onHide();  // Сховати модальне вікно після додавання типу.
        });
    }

    return (
        <Modal
            show={show}  // Властивість, яка вказує, чи відображати модальне вікно, передане з батьківського компонента.
            onHide={onHide}  // Функція, яка буде викликана при закритті модального вікна.
            centered  // Вікно буде центровано на екрані.
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додати тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введіть назву типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"variant-danger"} onClick={onHide}>Закрити</Button>
                <Button variant={"variant-success"} onClick={addType}>Добавити</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;  // Експортуємо компонент CreateType для використання в інших частинах програми.
