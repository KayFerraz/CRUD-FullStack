# APLICAÇÃO CADASTRO DE USUÁRIOS 
Criação de um crud simples com adição de usuários (id) e suas respectivas atribuições.
Este é um projeto de exemplo para um sistema de cadastro de usuário, onde é possível registrar, listar, atualizar e deletar informações de usuários. As informações dos usuários incluem nome, data de nascimento, email e telefone.

## Tecnologias Utilizadas
Node.js: Usado no backend para criar uma API RESTful.
Express.js: Framework para Node.js para facilitar a criação de servidores.
MySQL: Banco de dados relacional para armazenar as informações dos usuários.
React.js: Usado no frontend para criar a interface de usuário.
Axios: Biblioteca para fazer requisições HTTP do frontend para o backend.

## Funcionalidades
Registrar usuário: Adicionar um novo usuário ao banco de dados.
Listar usuários: Listar todos os usuários cadastrados.
Atualizar usuário: Atualizar as informações de um usuário específico.
Deletar usuário: Remover um usuário do banco de dados.
Requisitos
Node.js
MySQL
npm (ou yarn)

### Executando o projeto
# Back-end

Os nomes das branches criadas devem seguir o seguinte padrão de nomenclatura:

1. Clone o repositório:
```
[(https://github.com/KayFerraz/CRUD-FullStack.git)]
```

2. Navegue até a pasta do back-end:
```
[cd api]
```

3. Instale as dependências:
```
[npm install]
```


4. Configure o banco de dados MySQL:

Crie um banco de dados chamado cadastro_usuario.
Configure as credenciais do banco de dados no arquivo .env.
Exemplo de arquivo .env:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=cadastro_usuario
```

5. Execute as migrações do banco de dados para criar as tabelas necessárias:
```
[npm run migrate]
```

6. Inicie o servidor:
```
[npm start]
```
# Front-end

1. Navegue até a pasta do frontend:
```
[cd interface]
```
2. Instale as dependências:
```
[npm install]
```
3. Inicie o servidor de desenvolvimento:
```
[npm start]
```
