import React, { useState, useEffect } from 'react';
import { Button, Dropdown, Modal } from "react-bootstrap";
import { deleteType, fetchTypes } from "../../http/deviceApi";
import { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const DeleteType = observer(({ show, onHide }) => {
    const [selectedType, setSelectedType] = useState(null); // Змінна для вибраного типу.

    const { device } = useContext(Context);

    const removeType = () => {
        if (!selectedType) return; // Перевіряємо, чи вибрано тип перед видаленням.

        deleteType(selectedType.id)
            .then(() => {
                // Після успішного видалення можна виконати необхідні дії, наприклад, оновити список типів або закрити модальне вікно.
                setSelectedType(null); // Скидаємо вибраний тип після видалення.
                onHide(); // Закрити модальне вікно після видалення.
            })
            .catch(error => {
                // Обробка помилки, якщо виникла яка-небудь проблема з видаленням типу.
                console.error("Помилка видалення типу:", error);
            });
    }

    useEffect(() => {
        // Викликаємо функцію для завантаження списку типів при завантаженні компонента.
        fetchTypes()
            .then(data => device.setTypes(data))
            .catch(error => {
                console.error("Помилка завантаження типів:", error);
            });
    }, [device]);

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Видалити тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>
                        {selectedType ? selectedType.name : "Виберіть тип"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type => (
                            <Dropdown.Item
                                onClick={() => setSelectedType(type)}
                                key={type.id}
                            >
                                {type.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onHide}>Закрити</Button>
                <Button variant="success" onClick={removeType}>Видалити</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteType;
