import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Імпорт основного компонента додатку.
import UserStore from "./store/UserStore"; // Імпорт стору користувача.
import DeviceStore from "./store/DeviceStore"; // Імпорт стору для пристроїв.

export const Context = createContext(null); // Створення контексту додатку.

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(), // Створення інстанції стору користувача.
        device: new DeviceStore(), // Створення інстанції стору для пристроїв.
    }}>
        <App /> {/* Передача створеного контексту як значення провайдера контексту. */}
    </Context.Provider>,

    document.getElementById('root')// Рендеринг додатку в DOM елемент з ідентифікатором 'root'.
);

