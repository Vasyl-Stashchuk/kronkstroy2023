import React, { useState } from 'react';  // Імпортуємо необхідні бібліотеки та модулі React.
import { Button, Form, Modal } from "react-bootstrap";  // Імпортуємо компоненти Bootstrap для створення модального вікна.
import { createBrand } from "../../http/deviceApi";  // Імпортуємо функцію для створення бренду з сервера.

const CreateBrand = ({ show, onHide }) => {
    const [value, setValue] = useState('');  // Встановлюємо початковий стан для поля вводу назви бренду.

    const addBrand = () => {  // Функція для додавання нового бренду.
        createBrand({ name: value }).then(data => {  // Викликаємо функцію createBrand з передачею об'єкта {name: value} на сервер.
            setValue('');  // Очищаємо поле вводу після успішного додавання бренду.
            onHide();  // Сховати модальне вікно після додавання бренду.
        });
    }

    return (
        <Modal
            show={show}  // Властивість, яка вказує, чи відображати модальне вікно, передане з батьківського компонента.
            onHide={onHide}  // Функція, яка буде викликана при закритті модального вікна.
            centered  // Вікно буде центровано на екрані.
        >
            <Modal.Header closeButton>  // Верхній блок модального вікна з кнопкою закриття.
                <Modal.Title id="contained-modal-title-vcenter">  // Заголовок модального вікна.
                    Додати бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>  // Основна частина модального вікна, де розміщується форма для введення назви бренду.
                <Form>
                    <Form.Control
                        value={value}  // Поточне значення поля вводу, яке відображається на екрані.
                        onChange={e => setValue(e.target.value)}  // Функція для оновлення значення поля вводу при зміні вмісту.
                        placeholder={"Введіть назву бренду"}  // Плейсхолдер, який відображається у полі вводу.
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>  // Нижній блок модального вікна з кнопками.
                <Button variant={"variant-danger"} onClick={onHide}>Закрити</Button>  // Кнопка для закриття модального вікна.
                <Button variant={"variant-success"} onClick={addBrand}>Додати</Button>  // Кнопка для додавання бренду.
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;  // Експортуємо компонент CreateBrand для використання в інших частинах програми.
