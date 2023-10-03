import React, { useState } from 'react';  // Імпортуємо необхідні бібліотеки та компоненти React.
import { Button, Container } from "react-bootstrap";  // Імпортуємо компоненти Bootstrap.
import CreateBrand from "../components/modals/CreateBrand";  // Імпортуємо компонент для створення бренду.
import CreateDevice from "../components/modals/CreateDevice";  // Імпортуємо компонент для створення пристрою.
import CreateType from "../components/modals/CreateType";
import DeleteType from "../components/modals/DeleteType";  // Імпортуємо компонент для створення типу.

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);  // Створюємо стан для відображення/приховування модального вікна для створення бренду.
    const [typeVisible, setTypeVisible] = useState(false);  // Створюємо стан для відображення/приховування модального вікна для створення типу.
    const [typeDeleteVisible, setTypeDeleteVisible] = useState(false);  // Створюємо стан для відображення/приховування модального вікна для створення типу.
    const [deviceVisible, setDeviceVisible] = useState(false);  // Створюємо стан для відображення/приховування модального вікна для створення пристрою.


    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавити тип
            </Button>
            <Button
                variant={"outline-danger"}
                className="mt-4 p-2"
                onClick={() => setTypeDeleteVisible(true)}
            >
                Видалити тип
            </Button>
            {/*<Button*/}
            {/*    variant={"outline-dark"}*/}
            {/*    className="mt-4 p-2"*/}
            {/*    onClick={() => setBrandVisible(true)}*/}
            {/*>*/}
            {/*    Добавити бренд*/}
            {/*</Button>*/}
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавити проект
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />  {/* Відображаємо компонент для створення бренду, якщо brandVisible === true */}
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />  {/* Відображаємо компонент для створення пристрою, якщо deviceVisible === true */}
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <DeleteType show={typeDeleteVisible} onHide={() => setTypeDeleteVisible(false)} />{/* Відображаємо компонент для створення типу, якщо typeVisible === true */}
        </Container>
    );
};

export default Admin;
