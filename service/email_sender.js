//need full test run, not tested at all
//import {email, pass } from 'service/local_email_data.js'; //create this locally on run with credentials to executioner's email (rudimentary .env file)
import dotenv  from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';

const sendEquips = (equipsString) => {
  const mailTransporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_ADRESS,
        pass: process.env.EMAIL_PASSWORD,
    }
  });
  
  const mailDetails = {
    from: process.env.EMAIL_ADRESS,
    to: process.env.EMAIL_RECIEVER,
    subject: 'Trocas de bateria RA e GA do proximo mes (apartir de 18/04/2023)',
    text: equipsString
  };
  mailTransporter.sendMail(mailDetails, function(err, data) {
  if(err) {
      console.log(process.env.EMAIL_ADRESS);
  } else {
      console.log('Email sent successfully');
  }
});}
const dateOptions = {
  weekday:'long',
  month:'long',
  year:'numeric',
  day:'numeric',
}
const formatText = (jsonEquipsArray) => {
  const today = new Date ();
  const todayText = today.toLocaleString('pt-br', dateOptions);
  const emailHeader = "Seguem as trocas de baterias pendentes para o proximo mes a partir de " + todayText + "\n";
  let emailBody = "";
  for(let equip of jsonEquipsArray){
    let equipName = equip.localizacao;
    let equipCode = equip.equipamento;
    let lastDate = new Date(equip.data_ultima_troca);
    let equipLastDate = lastDate.toLocaleString('pt-br', dateOptions);
    let nextDate = new Date(equip.data_proxima_troca);
    let equipNextDate = nextDate.toLocaleString('pt-br', dateOptions);
    emailBody += "\n Localização: " + equipName + "\n Equipamento: " + equipCode + "\n Data ultima troca: " + equipLastDate + " \n Data proxima troca: " + equipNextDate + "\n" ; 
  }
  const emailFooter = "\nCaso hajam erros e/ou sugestões para a melhoria dessa funcionalidade favor responder o email com elas! Obrigado!";
  const emailContent = emailHeader + emailBody + emailFooter;
  return emailContent;
}

export  {sendEquips , formatText};
