import React from 'react'

export default function ContactForm() {
  return (
    <div className='contactForm'>
        <h2>Nous contacter</h2>
        <form action="">
        <label htmlFor="">Nom :</label>
        <input type="text" />
        <label htmlFor="">Prénom :</label>
        <input type="text" />
        <label htmlFor="">Mail :</label>
        <input type="mail" />
        <label htmlFor="">Objet :</label>
        <select name="" id="">Devis</select>
        <select name="" id="">Renseignements</select>
        <label htmlFor="">Votre message :</label>
        <input type="mail" />
        <button>Envoyer</button>
        </form>
    </div>
  )
}
