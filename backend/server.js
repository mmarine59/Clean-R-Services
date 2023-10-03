import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

// Utilisation cors avec une configuration pour autoriser les requêtes provenant de l'origine spécifiée
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'POST', // Autorisez uniquement les requêtes POST
}));

// Middleware pour analyser les données du formulaire
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuration de nodemailer pour envoyer l'e-mail
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Gérer la requête POST lorsque le formulaire est soumis
app.post("/contact", (req, res) => {
  const { lastname, firstname, email, object, message } = req.body;

  // Options de l'e-mail
  const mailOptions = {
    from: email, // Utilisez l'e-mail de l'expéditeur spécifié dans le formulaire
    to: EMAIL_USER, // Adresse e-mail du destinataire
    subject: "Nouveau message de formulaire de contact",
    text: `
            Nom : ${lastname}
            Prénom : ${firstname}
            E-mail : ${email}
            Objet : ${object}
            Message : ${message}
        `,
  };

  // Envoi de l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    // En cas d'erreur lors de l'envoi de l'e-mail
    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Erreur lors de l'envoi de l'e-mail" });
    } else {
      console.log("E-mail envoyé : " + info.response);
      return res.status(200).json({ message: "E-mail envoyé avec succès" });
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});