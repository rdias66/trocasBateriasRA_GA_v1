//need full test run, not tested at all
//import {email, pass } from 'service/local_email_data.js'; //create this locally on run with credentials to executioner's email (rudimentary .env file)
import nodemailer from 'nodemailer';


const sendEquips = (equipsString) => {
  const mailTransporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'dias.a@live.com',
        pass: 'RodrigoDias666@ALMEIDA'
    }
  });
  
  const mailDetails = {
    from: 'dias.a@live.com',
    to: 'dias.a@live.com',
    subject: 'Trocas do proximo mes',
    text: equipsString
  };
  mailTransporter.sendMail(mailDetails, function(err, data) {
  if(err) {
      console.log('Error Occurs');
  } else {
      console.log('Email sent successfully');
  }
});}

const formatText = (jsonArray) => {
}

export  {sendEquips , formatText};
