import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceApi";
import '../css/Project.css';
import '../css/index.css';
import {Context} from "../index";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import Pages from "../components/Pages";
import BrandBarAlt from "../components/BrandBarAlt";

const Project = observer(() => {

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

    return (
        <div>
            <div className="bg-black d-flex justify-content-center align-items-center flex-column">
                <h3 className="d-flex justify-content-center bg-black text-white">ПРОЕКТИ </h3>
                <hr className="super-hr"/>
            </div>
            <BrandBarAlt />  {/* Відображаємо компонент BrandBar для фільтрації за брендами пристроїв. */}
            <DeviceList />  {/* Відображаємо компонент DeviceList для відображення списку пристроїв. */}
            <Pages />  {/* Відображаємо компонент Pages для створення сторінкованого відображення списку пристроїв. */}

        </div>
    );
});

export default Project;