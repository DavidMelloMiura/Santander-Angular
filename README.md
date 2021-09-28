
Instruções para rodar o projeto

Dentro do Projeto no visual studio - Criar uma pasta backend
Nessa pasta - Abrir o terminal de comando
npm init -y
==================================================

Criar dentro da pasta backend um arquivo
db.json
colar o codigo abaixo

{
  "colaboradores": [
    {
      "id": "",
      "nome": "David",
      "sobrenome": "Shinobi",
      "cargo": "Desenvolvedor Java",
      "dataNascimento": "26/10/1981",
      "endereco": "Rua sete, 7"
    }
  ]
}

==================================================

npm i json-server - abrir esse arquivo
na linha 7 onde esta escrito ("test"), apaga a linha toda e cola o seguinte:
"start": "json-server --watch db.json --port 3001"


==================================================
Para iniciar o projeto

Abrir o terminal na pasta backend e digitar npm start
Para testar
Apresentando o Resource 
http://localhost:3001 (local configurado no Json server)
Significa que esta okay

Depois abrir o terminal clicando em cima na pasta app do projeto em angular e digitar ng serve
