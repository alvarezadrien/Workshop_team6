import React, { useState } from "react";
import '../styles/Contact.css';
// import emailjs from 'emailjs-com';

const Contact = () => {
    return (
        <section className="contact">
            <form action="" method="POST">
                <h1>CONTACT US</h1>
                
                <label htmlFor="nom"></label>
                <input type="text" name="nom" placeholder="Nom" required />

                <label htmlFor="email"></label>
                <input type="email" name="email" placeholder="Email" required />

                <label htmlFor="telephone"></label>
                <input type="text" name="telephone" placeholder="Téléphone" />

                <label htmlFor="choix">Sélectionnez une option :</label>
                <select id="choix" name="choix">
                    <option value="particulier">Particulier</option>
                    <option value="professionnel">Professionnel</option>
                </select>

                <div>
                    <label htmlFor="message"></label>
                    <textarea name="message" cols="30" rows="10" placeholder="Message/Suggestions"></textarea>
                    <button type="submit">Envoyer</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
