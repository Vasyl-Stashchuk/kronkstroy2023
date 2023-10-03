import React, { useContext, useState } from 'react';  // Імпортуємо необхідні бібліотеки та компоненти React.
import { Button, Card, Container, Form, Row } from "react-bootstrap";  // Імпортуємо компоненти Bootstrap.
import { NavLink, useHistory, useLocation } from "react-router-dom";  // Імпортуємо функції з React Router для навігації між сторінками.
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";  // Імпортуємо константи для шляхів.
import { login, registration } from "../http/userAPI";  // Імпортуємо функції для авторизації та реєстрації користувача.
import { observer } from "mobx-react-lite";  // Імпортуємо функцію observer для роботи з MobX.
import { Context } from "../index";  // Імпортуємо контекст додатка.

const Auth = observer(() => {
    const { user } = useContext(Context);  // Отримуємо користувача з контексту додатка.
    const location = useLocation();  // Отримуємо поточний шлях сторінки з React Router.
    const history = useHistory();  // Отримуємо об'єкт для навігації між сторінками.
    const isLogin = location.pathname === LOGIN_ROUTE;  // Перевіряємо, чи ми на сторінці авторизації.
    const [email, setEmail] = useState('');  // Створюємо стан для зберігання email користувача.
    const [password, setPassword] = useState('');  // Створюємо стан для зберігання паролю користувача.





    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);  // Викликаємо функцію для авторизації користувача, якщо ми на сторінці авторизації.
            } else {
                data = await registration(email, password);  // Викликаємо функцію для реєстрації користувача, якщо ми на сторінці реєстрації.
            }
            user.setUser(data);  // Встановлюємо користувача в контексті додатка.
            user.setIsAuth(true);  // Позначаємо, що користувач авторизований.
            history.push(SHOP_ROUTE);  // Перенаправляємо користувача на головну сторінку магазину.
        } catch (e) {
            alert(e.response.data.message);  // Виводимо помилку, якщо її повернув сервер.
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ваш email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ваш пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Немає аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зареєструйся!</NavLink>
                            </div>
                            :
                            <div>
                                Є аккаунт? <NavLink to={LOGIN_ROUTE}>Увійдіть!</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Увійти' : 'Реєстрація'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
