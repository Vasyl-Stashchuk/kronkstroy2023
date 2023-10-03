import React from 'react';
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import '../css/ContactForm.css';
import '../css/index.css';

const Contact = () => {

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
            <div className="contact bg-black">
                <div className=" d-flex flex-column align-items-center">
                    <h3 className="d-flex justify-content-center bg-black m-0 text-white">КОНТАКТИ</h3>
                    <hr className="super-hr"/>
                    <ContactForm onFormSubmit={handleFormSubmit} />
                </div>
            </div>
            <Map/>
        </div>
);
};

export default Contact;
