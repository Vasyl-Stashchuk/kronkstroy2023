import React from 'react';
import {Button} from "react-bootstrap";
import '../css/Service.css';
import '../css/index.css';
import block from "../assets/image-2.1-min.jpg";
import block2 from "../assets/image-4.5-min.jpg";
import block3 from "../assets/image-5.2-min.jpg";
import block4 from "../assets/image-min.jpg";
import {Link} from "react-router-dom";


const Services = () => {

    return (
       <div className="services" >
           <article className="block-white" style={{ backgroundImage: `url(${block})`}}>
               <div className="">
                   <h3>РЕКЛАМНІ КОНСТРУКЦІЇ</h3>
                   <hr className="super-hr"/>
                   <h4>Ми надаємо повний цикл виготовлення вивісок, починаючи від дизайн-проекту до монтажу на об`єкті. Сучасні технології освітлення та виробництва елементів зовнішньої реклами, а також багаторічний досвід дозволяють нам виготовляти найбільш якісну привабливу та енергоощадну зовнішню рекламу.</h4>
                   {/*<button className="service-button text-black">Переглянути детальніше</button>*/}
                   <button className="service-button text-black">
                       <Link to={`/service/${0}`} style={{ color: "inherit", textDecoration: "none" }}>Переглянути детальніше</Link>
                   </button>
               </div>

               <div className="photo-columns">
                   <img src={block} />
               </div>

           </article>
           <article className="block-black" style={{ backgroundImage: `url(${block2})`}}>

               <div className="">
                   <h3>ФАСАДИ З КОРТЕН СТАЛИ</h3>
                   <hr className="super-hr"/>
                   <h4>Кортен-сталь, сталь Кортен, Cor-Ten steel, просто Кортен. Називайте як хочете, але суті справи це не змінює. Зіткнулися з цим матеріалом років 12-15 тому, точно вже не згадаю. Так і головне, що побачив її перший раз не на фасаді, і не на пам`ятнику, а на кораблі. Кажу тоді товаришу, мовляв, що це за корабель такий — мотлох якийсь іржавий. На що у відповідь почув, що я неосвічений тип і багато чого цікавого дізнався і про себе, а головне і про Кортена…</h4>
                   {/*<button className="service-button text-white">Переглянути детальніше</button>*/}
                   <button className="service-button text-black">
                       <Link to={`/service/${1}`} style={{ color: "inherit", textDecoration: "none" }}>Переглянути детальніше</Link>
                   </button>
               </div>

               <div className="photo-columns">
                   <img src={block2} />
               </div>

           </article>
           <article className="block-white" style={{ backgroundImage: `url(${block3})`}}>
               <div className="">
                   <h3>АЛЮМІНІЄВІ СВІТЛОПРОЗОРНІ КОНСТРУКЦІЇ</h3>
                   <hr className="super-hr"/>
                   <h4>Під час зведення бізнес-центрів, розважальних закладів, держустанов люди все частіше обирають ці матеріали. Вони відрізняються хорошими експлуатаційними характеристиками, і ціна на них досить демократична.</h4>
                   {/*<button className="service-button">Переглянути детальніше</button>*/}
                   <button className="service-button text-black">
                       <Link to={`/service/${2}`} style={{ color: "inherit", textDecoration: "none" }}>Переглянути детальніше</Link>
                   </button>
               </div>

               <div className="photo-columns">
                   <img src={block3} />
               </div>

           </article>
           <article className="block-black" style={{ backgroundImage: `url(${block4})`}}>

               <div className="">
                   <h3>НАВІСНІ ВЕНТИЛЮВАНІ ФАСАДИ</h3>
                   <hr className="super-hr"/>
                   <h4>Забезпечує природну вологість повітря і постійну температуру в приміщенні створює додаткову звукоізоляцію, зменшує можливість виникнення грибків, тому навіть люди з алергією почуваються комфортно в прикрашеній вентильованими фасадами будівлі. Крім того, вентильовані фасади є ідеальним рішенням не тільки для утеплення, але і для надання будинку сучасний вигляд.</h4>
                   {/*<button className="service-button text-white">Переглянути детальніше</button>*/}
                   <button className="service-button text-black">
                       <Link to={`/service/${3}`} style={{ color: "inherit", textDecoration: "none" }}>Переглянути детальніше</Link>
                   </button>
               </div>

               <div className="photo-columns">
                   <img src={block4} />
               </div>

           </article>
       </div>
    );
};

export default Services;