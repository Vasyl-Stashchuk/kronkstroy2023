import React, { useContext } from 'react';  // Імпортуємо необхідні бібліотеки та модулі React.
import { observer } from "mobx-react-lite";  // Імпортуємо бібліотеку для створення спостерігачів MobX.
import { Context } from "../index";  // Імпортуємо контекст додатка з кореневого файлу.
import { Pagination } from "react-bootstrap";  // Імпортуємо компоненти Bootstrap для створення пагінації.
import '../css/Project.css';
import '../css/index.css';

const Pages = observer(() => {
    const { device } = useContext(Context);  // Отримуємо дані про пристрої та сторінки з контексту додатка.
    const pageCount = Math.ceil(device.totalCount / device.limit);  // Визначаємо загальну кількість сторінок на основі загальної кількості пристроїв та ліміту на сторінку.
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);  // Додаємо номери сторінок до масиву pages, починаючи з 1.
    }

    return (
        <Pagination className="pages bg-black">  {/* Відображення компонента пагінації з відступом від верху */}
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={device.page === page}  // Позначаємо поточну сторінку активною (за замовчуванням) за допомогою Bootstrap.
                    onClick={() => device.setPage(page)}  // Обробник кліку для зміни поточної сторінки.
                >
                    {page}  {/* Відображення номера сторінки */}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;  // Експортуємо компонент Pages для використання в інших частинах програми.
