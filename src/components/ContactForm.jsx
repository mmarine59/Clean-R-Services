import React from 'react'

export default function ContactForm() {
    return (
        <div className='contactForm'>
            <h2>Nous contacter</h2>
            <form action="http://localhost:3000/envoyer-email" className='form'>
                <div className="lastname">
                <label htmlFor="lastname">Nom :</label>
                <input type="text" name='lastname' id='lastname' required/>
                </div>
                <div className="firstname">
                <label htmlFor="firstname">Prénom :</label>
                <input type="text" name='firstname' id='firstname' required/>
                </div>
                <div className="email">
                <label htmlFor="email">Mail :</label>
                <input type="mail" name='email' id='email' required/>
                </div>
                <div className="object">
                <label htmlFor="object">Objet :</label>
                <select name="object" id="object" required>
                    <option value="ask-estimate">Demande de devis</option>
                    <option value="ask-infos">Demande de renseignement</option>
                </select>
                </div>
                <div className="message">
                <label htmlFor="message">Votre message :</label>
                <textarea name='message' id='message' required/>
                </div>
                <button>Envoyer</button>
            </form>
        </div>
    )
}
