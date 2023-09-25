const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require ('dotenv').config(); // Chargez les variables d'environnement à partir du fichier .env

const app = express();

// Middleware pour parser les données du formulaire
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuration de nodemailer pour envoyer l'e-mail
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE, // Utilisation de la variable d'environnement
    auth: {
        user: process.env.EMAIL_USER, // Utilisation de la variable d'environnement
        pass: process.env.EMAIL_PASSWORD // Utilisation de la variable d'environnement
    }
});

// Gérer la requête POST lorsque le formulaire est soumis
app.post('/envoyer-email', (req, res) => {
    const { lastname, firstname, email, object, message } = req.body;

    // Options de l'e-mail
    const mailOptions = {
        from: email, // Utilisez l'e-mail de l'expéditeur spécifié dans le formulaire
        to: 'adresse-destinataire@email.com', // Adresse e-mail du destinataire
        subject: 'Nouveau message de formulaire de contact',
        text: `
            Nom : ${lastname}
            Prénom : ${firstname}
            E-mail : ${email}
            Objet : ${object}
            Message : ${message}
        `
    };

    // Envoi de l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
        } else {
            console.log('E-mail envoyé : ' + info.response);
            res.status(200).send('E-mail envoyé avec succès');
        }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
