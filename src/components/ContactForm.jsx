import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        lastname: '',
        firstname: '',
        email: '',
        object: 'ask-estimate',
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log("E-mail envoyé avec succès");
                // Réinitialisation formulaire après envoi réussi
                setFormData({
                    lastname: '',
                    firstname: '',
                    email: '',
                    object: 'ask-estimate',
                    message: '',
                });
            } else {
                console.error("Erreur lors de l'envoi de l'e-mail");
            }
        } catch (error) {
            console.error("Erreur inattendue:", error);
        }
    };

    const handleChange = (e) => {
        // MAJ données du formulaire en fonction des changements de l'utilisateur
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className='contactForm'>
            <h2>Nous contacter</h2>
            <form onSubmit={handleSubmit} className='form'>
                <div className="lastname">
                    <label htmlFor="lastname">Nom :</label>
                    <input
                        type="text"
                        name='lastname'
                        id='lastname'
                        required
                        value={formData.lastname}
                        onChange={handleChange} 
                    />
                </div>
                <div className="firstname">
                    <label htmlFor="firstname">Prénom :</label>
                    <input
                        type="text"
                        name='firstname'
                        id='firstname'
                        required
                        value={formData.firstname}
                        onChange={handleChange} 
                    />
                </div>
                <div className="email">
                    <label htmlFor="email">Mail :</label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        required
                        value={formData.email}
                        onChange={handleChange} 
                    />
                </div>
                <div className="object">
                    <label htmlFor="object">Objet :</label>
                    <select
                        name="object"
                        id="object"
                        required
                        value={formData.object}
                        onChange={handleChange} 
                    >
                        <option value="ask-estimate">Demande de devis</option>
                        <option value="ask-infos">Demande de renseignement</option>
                    </select>
                </div>
                <div className="message">
                    <label htmlFor="message">Votre message :</label>
                    <textarea
                        name='message'
                        id='message'
                        required
                        value={formData.message}
                        onChange={handleChange} 
                    />
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}


