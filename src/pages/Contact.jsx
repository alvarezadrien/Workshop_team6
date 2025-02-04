// import React, { useState } from "react";
// import '../styles/Contact.css';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//     return (
//         <section className="contact">
//             <form action="" method="POST">
//                 <h1>CONTACT US</h1>
                
//                 <label htmlFor="name"></label>
//                 <input type="text" name="name" placeholder="Nom" required />

//                 <label htmlFor="email"></label>
//                 <input type="email" name="email" placeholder="Email" required />

//                 <label htmlFor="telephone"></label>
//                 <input type="text" name="telephone" placeholder="Téléphone" />

//                 <label htmlFor="choix">Sélectionnez une option :</label>
//                 <select id="choix" name="choix">
//                     <option value="particulier">Particulier</option>
//                     <option value="professionnel">Professionnel</option>
//                 </select>

//                 <div>
//                     <label htmlFor="message"></label>
//                     <textarea name="message" cols="30" rows="10" placeholder="Message/Suggestions"></textarea>
//                     <button type="submit">Envoyer</button>
//                 </div>
//             </form>
//         </section>
//     );
// };

// export default Contact;

import React, { useState } from "react";
import '../styles/Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        telephone: "",
        choix: "particulier",
        message: ""
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_61v6fky", //Service ID
            "template_bo3qyzw", //TEMPLATE ID EmailJS
            formData,
            "b-uXyN8nNUMIp6-PL" //USER ID EmailJS
        )
        .then((response) => {
            setSuccessMessage("Message envoyé avec succès !");
            setErrorMessage("");
            setFormData({ name: "", email: "", telephone: "", choix: "particulier", message: "" });
        })
        .catch((error) => {
            setErrorMessage("Une erreur s'est produite, veuillez réessayer.");
            setSuccessMessage("");
        });
    };

    return (
        <section className="contact">
            <form onSubmit={handleSubmit}>
                <h1>CONTACT US</h1>
                {successMessage && <p className="success">{successMessage}</p>}
                {errorMessage && <p className="error">{errorMessage}</p>}
                
                <label htmlFor="name"></label>
                <input type="text" name="name" placeholder="Nom" required value={formData.name} onChange={handleChange} />

                <label htmlFor="email"></label>
                <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />

                <label htmlFor="telephone"></label>
                <input type="text" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} />

                <label htmlFor="choix">Sélectionnez une option :</label>
                <select id="choix" name="choix" value={formData.choix} onChange={handleChange}>
                    <option value="particulier">Particulier</option>
                    <option value="professionnel">Professionnel</option>
                </select>

                <label htmlFor="message"></label>
                <textarea name="message" cols="30" rows="10" placeholder="Message/Suggestions" value={formData.message} onChange={handleChange}></textarea>
                
                <button type="submit">Envoyer</button>
            </form>
        </section>
    );
};

export default Contact;