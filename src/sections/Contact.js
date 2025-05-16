import React,{useState} from "react";
import {ref, push} from "firebase/database";
import database from "../firebase";

function Contact() {
    const [formData, setFormData] = useState({name: "",email: "",message: ""});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const contactRef = ref(database, "contacts");
        await push(contactRef, formData);
        setSubmitted(true);
    };

    return(
        <div className="container py-5" data-aos='fade-up'>
            <h2>Contact Me</h2>
            {submitted ?(
                <div className="alert alert-success">Thanks for contacting me!</div>
            ):(
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text" name="name" id="name" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="email" name="email" id="email" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label>Message</label>
                        <textarea name="message" id="message" className="form-control" onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            )}
        </div>
    );
}

export default Contact;