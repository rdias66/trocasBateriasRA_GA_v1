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
const dateOptions = {
  hour: '2-digit';
  minute:'2-digit';
  second:'2-digit';
  weekday:'long';
  month:'numeric';
  year:'numeric';
  day:'numeric';
}
const formatText = (jsonEquipsArray) => {
  const today = new Date ();
  const todayText = today.toLocaleString('pt-br', dateOptions);
  const emailHeader = "Seguem as trocas de baterias pendentes para o proximo mes a partir de " + todayText + "\n";
  const emailBody = "";
  for(let equip of jsonEquipsArray){
    let equipName = equip.localizacao;
    let equipCode = equip.equipamento;
    let equipLastDate = equip.data_ultima_troca;
    let equipNextDate = equip.data_proxima_troca;
    emailBody += "\n Localização:" + equipName + "\n Equipamento:" + equipCode + "\n Data ultima troca: " + equipLastDate + " \n Data proxima troca" + equipNextDate; 
  }
  const emailFooter = "\nCaso hajam erros e/ou sugestões para a melhoria dessa funcionalidade favor responder o email com elas! Obrigado!";
  return  emailContent = emailHeader + emailBody + emailFooter;
}

export  {sendEquips , formatText};
