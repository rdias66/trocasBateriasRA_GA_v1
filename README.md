# trocasBateriasRA_GA_v1
- 1: npm install
- 2: local_email_data.js local
{
  email: 'user email',
  pass: 'user password'
}
- 3: criação dos caminhos do arquivo xlsx
-----
Projeto para automatização de notificações de trocas de baterias de equipamentos Copel(CSL)

Projeto desenvolvido para automatização da verificação de quais equipamentos listados na planilha(funciona como banco de dados) necessitam do tramite de trocas de bateria iniciado.
Primeiro transformamos a planilha em um array de jsons, lidamos com a data, aplicamos a regra de negocio, formatamos o email para envio ao responsavel, e enviamos o email com 
as trocas a serem feitas no proximo mes, e os equipamentos com invalidações em seus dados.
------------------------------------------------------------------------------------------------------------------------------------------------------------------
Planejamento geral e atualizações vindouras:
- Método de validação e segurança .env file à ser adcionado para substituir o local_email_data json
- Primeira versão genérica de um front end a ser feito.
- Aplicação de diversas funcionalidades de tratamento de dados de planilhas e direcionamento de tarefas a ser desenvolvida de acordo com necessidades do utilizador.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Para dúvidas e sugestões por favor contate: dias.a@live.com 

Obrigado!

_______________________________________________________________________________________________________________________________________________________________________
- 1: npm install
- 2: local_email_data.js local
{
  email: 'user email',
  pass: 'user password'
}
- 3: xlsx paths need to be setted
Project developed for the automation of the process of battery replacements on necessary equipments listed in a .xlsx file(works as the data base).
First with transform the sheet to an json array, then the dates are handled, the rule of business is applied and the email is formatted and sent to the responsable with all of the necessary information, including pending(expired) replacements and invalid data.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Project developed for the automation of the process of battery replacements on necessary equipments listed in a .xlsx file(works as the data base). First with transform the sheet to an json array, then the dates are handled, the rule of business is applied and the email is formatted and sent to the responsable with all of the necessary information, including pending(expired) replacements and invalid data. 
General planning and incoming updates:
- .env file method of validation and security to be added as a substitute to the local_data_email.js json
- Generic first version on a front-end to be made.
- Application of multiple utilities of data treatment in Sheet files and forwarding of tasks to be developed in paring with users needs.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
For doubts and suggestions please contact: dias.a@live.com 

Thanks!
