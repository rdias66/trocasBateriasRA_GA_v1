# trocasBateriasRA_GA_v1
Projeto para automatização de notificações de trocas de baterias de equipamentos Copel(CSL)

Projeto desenvolvido para automatização da verificação de quais equipamentos listados na planilha(funciona como banco de dados) necessitam do tramite de trocas de bateria iniciado.
Primeiro transformamos a planilha em um array de jsons, lidamos com a data, aplicamos a regra de negocio, formatamos o email para envio ao responsavel, e enviamos o email com 
as trocas a serem feitas no proximo mes, e os equipamentos com invalidações em seus dados.
Para funcionamento da feature de envio de email um arquivo chamado local_email_data.js deve ser criado com um json do seguinte formato:
{
  email: 'user email',
  pass: 'user password'
}
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Planejamento geral e atualizações vindouras:
- Funcionalidade do Email à ser debuggada e implementada completamente
- Método de validação e segurança .env file à ser adcionado para substituir o local_email_data json
- Funções que serão necessárias apenas na primeira vez que o código roda serão organizadas em um arquivo .js próprio, elas sendo; o filtro de datas inválidas e as trocas vencidas
- Primeira versão genérica de um front end a ser feito.
- Aplicação de diversas funcionalidades de tratamento de dados de planilhas e direcionamento de tarefas a ser desenvolvida de acordo com necessidades do utilizador.
- Nivel mais alto e filtro de menu será aplicado. Essa aplicação se tornará uma feature em outro programa

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Para dúvidas e sugestões por favor contate: dias.a@live.com 

Obrigado!

_______________________________________________________________________________________________________________________________________________________________________

Project developed for the automation of the process of battery replacements on necessary equipments listed in a .xlsx file(works as the data base).
First with transform the sheet to an json array, then the dates are handled, the rule of business is applied and the email is formatted and sent to the responsable with all of the necessary information, including pending(expired) replacements and invalid data.
For the email feature, the code needs a file created locally on the service folder called local_email_data.js , with the following format:

{
  email: 'user email',
  pass: 'user password'
}

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
General planning and incoming updates:
- Email feature to be debugged and fully implemented.
- .env file method of validation and security to be added as a substitute to the local_data_email.js json
- Functions only necessary on the first run to be organized in their own .js file. Them being: the invalid dates filtering and the expired replacements
- Generic first version on a front-end to be made.
- Application of multiple utilities of data treatment in Sheet files and forwarding of tasks to be developed in paring with users needs.
- Higher level and menu filtering to be applied. This application will become a feature of another program.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
For doubts and suggestions please contact: dias.a@live.com 

Thanks!
