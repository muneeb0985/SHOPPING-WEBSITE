import React, { useState } from "react";
import './Contact.css';
const Contact = () => {
    const [user, setUser] = useState({
        Name: '', email: '', subject: '', Message: '',
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }; 
    /// saved in firebase real time data//
    const send = async (e) => {
        e.preventDefault();
        const { Name, email, subject, Message } = user;

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"  
            },
            body: JSON.stringify({ Name, email, subject, Message })
        };

        const response = await fetch(
            'https://react-ecommerce-contact-5fa39-default-rtdb.firebaseio.com/Message.json',
            option
        );

        if (response.ok) {
            alert("Message Sent");
            setUser({ Name: '', email: '', subject: '', Message: '' }); // Clear form
        } else {
            alert('Error Occurred: Message send failed');
        }
    };

    return (
        <div className="contact">
            <div className="container">
                <div className="form">
                    <h2>#contact us</h2>
                    <form method='POST'>
                        <div className="box">
                            <div className="lable">
                                <h4>Name</h4>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Name" value={user.Name} name="Name" onChange={handleInput} />
                            </div>
                        </div>
                        <div className="box">
                            <div className="lable">
                                <h4>E-mail</h4>
                            </div>
                            <div className="input">
                                <input type="email" placeholder="E-mail" value={user.email} name="email" onChange={handleInput} />
                            </div>
                        </div>
                        <div className="box">
                            <div className="lable">
                                <h4>Subject</h4>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Subject" value={user.subject} name="subject" onChange={handleInput} />
                            </div>
                        </div>
                        <div className="box">
                            <div className="lable">
                                <h4>Message</h4>
                            </div>
                            <div className="input">
                                <textarea placeholder="Message!" value={user.Message} name="Message" onChange={handleInput}></textarea>
                            </div>
                        </div>
                        <button type="submit" onClick={send}>SEND</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
