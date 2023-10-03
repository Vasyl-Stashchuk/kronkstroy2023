import React from 'react';

const Map = () => {
    return (
        <div className="m-0">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.644311859089!2d34.9980154160544!3d48.48253577925242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe248adcbfe23%3A0xfc859195fe5b6fe8!2z0YPQuy4g0JDQutCw0LTQtdC80LjQutCwINCR0LXQu9C10LvRjtCx0YHQutC-0LPQviwgNTTQsCwg0JTQvdC40L_RgNC-LCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1639591844805!5m2!1sru!2sua"
                width="100%"
                height="500px"
                style={{ border: 0 }}  // Передаємо стилі як об'єкт
                allowFullScreen=""
                loading="lazy">
            </iframe>
        </div>
    );
};

export default Map;