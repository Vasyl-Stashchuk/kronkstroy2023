import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom"; // Імпорт бібліотеки для маршрутизації.
import AppRouter from "./components/AppRouter"; // Імпорт компонента для маршрутизації.
import NavBar from "./components/NavBar"; // Імпорт компонента навігаційного меню.
import {observer} from "mobx-react-lite"; // Імпорт бібліотеки для роботи з обсервером.
import {Context} from "./index"; // Імпорт контексту додатку.
import {check} from "./http/userAPI";
import WtfNav from "./components/WtfNav";
import FirstScreen from "./components/FirstScreen";
import Footer from "./components/Footer"; // Імпорт функції для перевірки авторизації користувача.

const App = observer(() => {
    const {user} = useContext(Context); // Отримання контексту додатку.
    const [loading, setLoading] = useState(true); // Стан для відстеження завантаження додатку.

    useEffect(() => {
        // Виконання перевірки авторизації користувача під час завантаження додатку.
        check().then(data => {
            user.setUser(true); // Встановлення інформації про користувача в контексті.
            user.setIsAuth(true); // Позначення користувача як авторизованого.
        }).finally(() => setLoading(false)); // Завершення завантаження та встановлення статусу завершення.
    }, []);

    return (
        <BrowserRouter basename="/">
            <WtfNav/>
            {/*<NavBar /> /!* Відображення навігаційного меню. *!/*/}

            <AppRouter /> {/* Відображення основного контенту додатку на основі маршрутів. */}

            <Footer />
        </BrowserRouter>
    );
});

export default App;
