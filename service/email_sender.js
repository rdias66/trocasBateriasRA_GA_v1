
import {email, pass } from 'service/local_data_email.js'; //create this locally on run with credentials to executioner's email (rudimentary .env file)
import nodemailer from 'nodemailer';

const sendEquips = jsonArray => {
    async function sendEmail(jsonArray) {
        let transporter = nodemailer.createTransport({
          host: 'smtp-mail.outlook.com',
          port: 587,
          secure: false,
          auth: {
            user: email,
            pass: pass
          }
        });
      
    const info = await transporter.sendMail({
        from: '"Rodrigo Dias" <dias.a@live.com>',
        to: 'rodrigoa@copel.com',
        subject: 'JSON Array',
        text: JSON.stringify(jsonArray),
        html: `<pre>${JSON.stringify(jsonArray, null, 2)}</pre>`
      });
  }

  console.log('Message sent: %s', info.messageId);
}

export default sendEquips;
