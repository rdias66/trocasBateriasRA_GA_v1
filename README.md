# trocasBateriasRA_GA_v1
Projeto para automatização de notificações de trocas de baterias de equipamentos Copel(CSL)

Projeto desenvolvido para automatização da verificação de quais equipamentos listados na planilha(funciona como banco de dados) necessitam do tramite de trocas de bateria iniciado.
Primeiro transformamos a planilha em um array de jsons, lidamos com a data, aplicamos a regra de negocio, formatamos o email para envio ao responsavel, e enviamos o email com 
as trocas a serem feitas no proximo mes, e os equipamentos com invalidades em seus dados.
Para funcionamento da feature de envio de email um arquivo chamado local_email_data.js deve ser criado com um json do seguinte formato:
{
  email: 'user email',
  pass: 'user password'
}

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Project developed for the automation of the process of battery replacement in the necessary equipments listed in the excel file(works as the data base).
First with transform the sheet to an json array, then the dates are handled, the rule of business is applied, the email is formatted and sent to the responsable with all
of the necessary information, including pending replacements and invalid data.
The email feature, the code needs a file created locally on the service folder called local_email_data.js , with the following format:

{
  email: 'user email',
  pass: 'user password'
}

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For doubts and suggestions please contact: dias.a@live.com 

Thanks!
