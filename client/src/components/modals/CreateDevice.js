import React, { useContext, useEffect, useState } from 'react';  // Імпортуємо необхідні бібліотеки та модулі React.
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";  // Імпортуємо компоненти Bootstrap для створення модального вікна та інших елементів інтерфейсу.
import { Context } from "../../index";  // Імпортуємо контекст додатка з кореневого файлу.
import DropdownToggle from "react-bootstrap/DropdownToggle";  // Імпортуємо компоненти Bootstrap для роботи з випадаючим списком.
import DropdownMenu from "react-bootstrap/DropdownMenu";
import { createDevice, fetchBrands, fetchDevices, fetchTypes } from "../../http/deviceApi";  // Імпортуємо функції для взаємодії з сервером.
import { observer } from "mobx-react-lite";  // Імпортуємо бібліотеку для створення спостерігачів MobX.
import { values } from "mobx";  // Імпортуємо функції для роботи з MobX.

const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context);  // Отримуємо дані з контексту додатка.

    // Створюємо стани для різних полів вводу та даних про пристрій.
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([]);

    useEffect(() => {
        // Викликаємо функції для завантаження списків типів та брендів при завантаженні компонента.
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
    }, []);

    const addInfo = () => {
        // Додаємо новий об'єкт з інформацією про властивість до масиву info.
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    };

    const removeInfo = (number) => {
        // Видаляємо об'єкт з інформацією про властивість з масиву info за номером.
        setInfo(info.filter(i => i.number !== number));
    };

    const changeInfo = (key, value, number) => {
        // Змінюємо значення властивості об'єкта в масиві info за номером та ключем.
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i));
    };

    const selectFiles = e => {
        // Перевірка, чи `e.target.files` є масивом
        if (e.target.files && e.target.files.length > 0) {
            // Додаємо вибрані файли до масиву files.
            setFiles(Array.from(e.target.files));
        }
    };

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id);
        formData.append('typeId', device.selectedType.id);
        formData.append('info', JSON.stringify(info));

        // Додаємо всі вибрані файли в FormData.
        for (const file of files) {
            formData.append('images', file);
        }

        createDevice(formData).then(data => onHide());
    };

    return (
        <Modal
            show={show}  // Властивість, яка вказує, чи відображати модальне вікно, передане з батьківського компонента.
            onHide={onHide}  // Функція, яка буде викликана при закритті модального вікна.
            centered  // Вікно буде центровано на екрані.
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додати проект
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* Випадаючий список для вибору типу пристрою */}
                    <Dropdown className="mt-2 mb-2">
                        <DropdownToggle>{device.selectedType.name || "Виберіть фільтрацію"}</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </DropdownMenu>
                    </Dropdown>

                    {/* Випадаючий список для вибору бренду пристрою */}
                    <Dropdown className="mt-2 mb-2">
                        <DropdownToggle>{device.selectedBrand.name || "Виберіть вид"}</DropdownToggle>
                        <DropdownMenu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </DropdownMenu>
                    </Dropdown>

                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введіть назву проекта"
                    />
                    {/*<Form.Control*/}
                    {/*    value={price}*/}
                    {/*    onChange={e => setPrice(Number(e.target.value))}*/}
                    {/*    className="mt-3"*/}
                    {/*    placeholder="Введіть вартість пристрою"*/}
                    {/*    type="number"*/}
                    {/*/>*/}
                    <h5>Фото титула</h5>
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <h5>Всі фото</h5>
                    <Form.Control
                        className="mt-3"
                        type="file"
                        multiple  // Дозволяє вибирати більше одного файлу
                        onChange={selectFiles}
                    />
                    <hr />

                    {/* Кнопка для додавання нової властивості */}
                    <Button
                        variant="outline-dark"
                        onClick={addInfo}
                    >
                        Додати опис проекта
                    </Button>

                    {/* Відображення списку властивостей пристрою */}
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введіть назву властивості"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введіть опис властивості"
                                />
                            </Col>
                            <Col md={4}>
                                {/* Кнопка для видалення властивості */}
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant="outline-danger"
                                >
                                    Видалити
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {/* Кнопка для закриття модального вікна */}
                <Button variant="variant-danger" onClick={onHide}>Закрити</Button>
                {/* Кнопка для додавання пристрою */}
                <Button variant="variant-success" onClick={addDevice}>Додати</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;  // Експортуємо компонент CreateDevice для використання в інших частинах програми.
