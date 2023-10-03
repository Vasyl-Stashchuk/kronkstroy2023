import React, { useContext, useEffect } from 'react';  // Імпортуємо необхідні бібліотеки та компоненти React.
import { Col, Container, Row } from "react-bootstrap";  // Імпортуємо компоненти Bootstrap.
import TypeBar from "../components/TypeBar";  // Імпортуємо компонент TypeBar для фільтрації за типами пристроїв.
import BrandBar from "../components/BrandBar";  // Імпортуємо компонент BrandBar для фільтрації за брендами пристроїв.
import DeviceList from "../components/DeviceList";  // Імпортуємо компонент DeviceList для відображення списку пристроїв.
import { observer } from "mobx-react-lite";  // Імпортуємо observer для стеження за змінами стану.
import { Context } from "../index";  // Імпортуємо контекст додатку.
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceApi";  // Імпортуємо функції для отримання даних про пристрої.
import '../css/Project.css';
import '../css/ContactForm.css';
import '../css/index.css';
import Pages from "../components/Pages";
import FirstScreen from "../components/FirstScreen";
import Services from "../components/Services";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";  // Імпортуємо компонент Pages для створення сторінкованого відображення списку пристроїв.

const Shop = observer(() => {
    const { device } = useContext(Context);  // Отримуємо доступ до стану пристроїв через контекст додатку.

    useEffect(() => {
        // Завантажуємо типи та бренди пристроїв при завантаженні сторінки.
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));

        // Завантажуємо першу сторінку пристроїв з обмеженням на кількість та встановлюємо їх у стан додатку.
        fetchDevices(null, null, 1, 8).then(data => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count);
        });
    }, []);

    useEffect(() => {
        // Перевіряємо, чи вибрано бренд перед тим, як використовувати його id.
        if (device.selectedBrand) {
            fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 8)
                .then(data => {
                    device.setDevices(data.rows);
                    device.setTotalCount(data.count);
                });
        }
    }, [device.selectedType, device.selectedBrand, device.page]);


    const handleFormSubmit = async (formData) => {
        try {
            const response = await fetch('https://formsubmit.co/b4adf86b709c51dd5aa0111af02af652', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully');
            } else {
                const data = await response.json();
                alert('Error sending message: ' + data.error);
            }
        } catch (error) {
            console.error('There was an error sending the message', error);
        }
    };

    return (

        <div>
            <FirstScreen/>
            {/*<Container>*/}
            <div className="p-4 d-flex flex-column align-items-center">
                <h3 className="d-flex justify-content-center text-black">ЧИМ МИ ЗАЙМАЄМОСЬ ?</h3>
                <hr className="super-hr"/>
                <BrandBar />  {/* Відображаємо компонент BrandBar для фільтрації за брендами пристроїв. */}
            </div>
                {/*    <TypeBar />  /!* Відображаємо компонент TypeBar для фільтрації за типами пристроїв. *!/*/}
            <div className="project d-flex flex-column align-items-center">
                <h3 className="d-flex justify-content-center">НАШІ ОСТАННІ ПРОЕКТИ </h3>
                <hr className="super-hr"/>
                <DeviceList />  {/* Відображаємо компонент DeviceList для відображення списку пристроїв. */}
            </div>


                {/*<Pages />  /!* Відображаємо компонент Pages для створення сторінкованого відображення списку пристроїв. *!/*/}
            {/*</Container>*/}
            <Services/>
            <Map/>
            <div className="contact bg-black">
                <div className=" d-flex flex-column align-items-center">
                    <h3 className="d-flex justify-content-center bg-black m-0 text-white">ЗВ'ЯЖІТЬСЯ З НАМИ</h3>
                    <hr className="super-hr"/>
                    <ContactForm onFormSubmit={handleFormSubmit} />
                </div>
            </div>
            {/*<Footer/>*/}
        </div>
    );
});

export default Shop;
