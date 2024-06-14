// src/routes/api/contact.js
import nodemailer from 'nodemailer';

export async function POST({ request }) {
  const { name, email, message } = await request.json();

  // Configurer le transporteur Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'mail.gmx.com', // Remplacez par votre serveur SMTP
    port: 587, // Le port peut varier selon votre serveur SMTP
    secure: false, // Utilisez true pour le port 465, false pour les autres ports
    auth: {
      user: 'site3d@gmx.fr', // Remplacez par votre adresse email
      pass: 'MotDePasse66', // Remplacez par votre mot de passe
    },
  });

  // Options de l'email
  const mailOptions = {
    from: "site3d@gmx.fr", // Adresse email de l'expéditeur
    to: 'site3d@gmx.fr', // Votre adresse email
    subject: 'Contact',
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}