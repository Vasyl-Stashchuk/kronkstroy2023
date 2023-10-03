import React from 'react';
import '../css/index.css';
import '../css/Facilities.css';
import docs from '../assets/services/google-docs.png';  // Імпортуємо зображення для відображення рейтингу.
import support from '../assets/services/support.png';  // Імпортуємо зображення для відображення рейтингу.
import portfolio from '../assets/services/portfolio.png';  // Імпортуємо зображення для відображення рейтингу.
import drill from '../assets/services/drill.png';  // Імпортуємо зображення для відображення рейтингу.
import drill1 from '../assets/services/drill1.png';  // Імпортуємо зображення для відображення рейтингу.
import image from '../assets/services/image2.png';  // Імпортуємо зображення для відображення рейтингу.


const Facilities = () => {
    return (
        <div>
            <div className="services-h3">
                <h3>Послуги</h3>
                <hr className="super-hr"/>

                    <h5>Спектр услуг предоставляемый компанией ООО «Кронк Строй»</h5>
            </div>


            <section className="service">


                <div className="exist">
                    <img src={docs} alt=""/>
                        <h4>
                            Составление технической и проектной документации
                            <hr className="super-hr"/>
                        </h4>
                </div>

                <div className="exist">
                    <img src={drill} alt=""/>
                        <h4>
                            Монтаж алюминиевой (нержавеющей) подсистемы
                            <hr className="super-hr"/>
                        </h4>
                </div>

                <div className="exist">
                    <img src={support} alt=""/>
                        <h4>
                            Монтаж минеральной ваты, базальта и т.п.
                            <hr className="super-hr"/>
                        </h4>
                </div>

                <div className="exist">
                    <img src={drill1} alt=""/>
                        <h4>
                            Монтаж АКП, керамогранита, HPL панелей, Кортен стали
                            <hr className="super-hr"/>
                        </h4>
                </div>

                <div className="exist">
                    <img src={portfolio} alt=""/>
                        <h4>
                            Разработка и монтаж светопрозрачных конструкций
                            <hr className="super-hr"/>
                        </h4>
                </div>

                <div className="exist">
                    <img src={portfolio} alt=""/>
                        <h4>
                            Разработка и монтаж рекламных конструкций
                            <hr className="super-hr"/>
                        </h4>
                </div>

                <div className="exist">
                    <img src={drill} alt=""/>
                        <h4>
                            Монтаж электрооборудования и освещения
                            <hr className="super-hr"/>
                        </h4>
                </div>

                <div className="exist">
                    <img src={drill1} alt=""/>
                        <h4>
                            Монтаж фасадов из Кортен стали
                            <hr className="super-hr"/>
                        </h4>
                </div>

            </section>

            <section className="about">
                <div className="aboutbg">

                    <h4>Данный список услуг далеко не полный, и большое спасибо всем кому было интересно дочитать этот
                        перечень хотя бы до середины. Просто обычно любой человек, читает только до того места где
                        находит то, что подходит именно ему. Да, и сами мы так поступаем.
                    </h4>

                    <h4>Компания «Кронк Строй» готова приступить к разным задачам, и находить решение даже в ситуациях,
                        которые могут показаться нерешаемыми. Многолетний опыт работы в сфере Вент Фасадов дает нам
                        возможность найти решение в самых сложных ситуациях, а наши клиенты всегда остаются,
                        удовлетворены нашим сотрудничеством. Словом: довольный заказчик – радость для нашей компании.
                    </h4>

                    <h4>Обращайтесь, даже если не нашли в этом списке того, что бы Вам хотелось реализовать у себя на
                        фасаде. А мы постараемся воплотить все Ваши запросы в жизнь.
                    </h4>

                    <h4>С уважением, компания ООО «Кронк Строй».
                    </h4>

                </div>

            </section>
        </div>
    );
};

export default Facilities;