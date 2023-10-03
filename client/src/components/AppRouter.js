import React, { useContext } from 'react';  // Імпортуємо необхідні бібліотеки та модулі React.
import { Switch, Route, Redirect } from 'react-router-dom';  // Імпортуємо компоненти для маршрутизації з бібліотеки react-router-dom.
import { authRoutes, publicRoutes } from "../routes";  // Імпортуємо масиви маршрутів для авторизованих та гостей.
import { SHOP_ROUTE } from "../utils/consts";  // Імпортуємо константу SHOP_ROUTE з файлу consts.js.
import { Context } from "../index";  // Імпортуємо контекст додатка з кореневого файлу.
import { observer } from "mobx-react-lite";
import Services from "./Services";
import ServicePage from "../pages/ServicePage";  // Імпортуємо бібліотеку для створення спостерігачів MobX.

const AppRouter = observer(() => {
    const { user } = useContext(Context);  // Отримуємо дані користувача з контексту додатка.

    console.log(user);  // Виводимо дані користувача у консоль для налагодження та дебагу.

    return (
        <Switch>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}

            {/* Перенаправлення на маршрут магазину (SHOP_ROUTE) у випадку, якщо маршрут не знайдено. */}

            <Route path="/" exact component={Services} />
            <Route path="/service/:id" component={ServicePage} />
            <Redirect to={SHOP_ROUTE} />
        </Switch>
    );
});

export default AppRouter;  // Експортуємо компонент AppRouter для використання в інших частинах програми.
