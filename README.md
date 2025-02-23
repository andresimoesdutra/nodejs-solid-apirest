# API REST com SOLID e Clean Architecture

Este projeto foi minha primeira experiência aplicando os princípios SOLID e Clean Architecture. Também implementei autenticação e autorização com JWT e usei o Nodemailer para a verificação de email dos usuários.
Foi um ótimo aprendizado, pois pude ver de perto como essas práticas melhoram a estrutura e a escalabilidade de um projeto.

##

# **Tecnologias Utilizadas:**
### **Backend e Frameworks**
![NodeJS](https://img.shields.io/badge/NodeJS-black?style=for-the-badge&logo=nodedotjs&logoColor=%2300a82d&labelColor=black&color=black)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=%230d72ff&labelColor=black&color=black)
![Express](https://img.shields.io/badge/express-black?style=for-the-badge&logo=express&labelColor=black&color=black)

- **NodeJS:** Backend da aplicação.
- **Express:** Criação da API e gerenciamento de rotas.
- **TypeScript:** Tipagem estática e organização do código.

### **Autenticação e Segurança**
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![BCryptjs](https://img.shields.io/badge/bcryptjs-black?style=for-the-badge&logo=lastpass&logoColor=white&labelColor=black&color=black)

- **JWT:** Autenticação e autorização.
- **Bcryptjs:** Hash seguro de senhas.

### **Banco de Dados**
![TypeORM](https://img.shields.io/badge/typeorm-black?style=for-the-badge&logo=typeorm&logoColor=red&labelColor=black&color=black)
![MySQL](https://img.shields.io/badge/mysql-black?style=for-the-badge&logo=mysql&labelColor=black&color=black)

- **TypeORM:** Interação com o banco de dados.
- **MySQL:** Armazenamento de dados dos usuários.

### **Outras Tecnologias**
![NODEMAILER](https://img.shields.io/badge/nodemailer-black?style=for-the-badge&logo=gmail&labelColor=black&color=black)

- **Nodemailer:** Envio de emails, como verificação de conta.

##

# **Sumário:**
- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints](#endpoints)

##

# Instalação:
### 1. Clonar o repositório:

```sh
 git clone https://github.com/andresimoesdutra/nodejs-solid-apirest.git
```

### 2. Navegar até o diretório do projeto:
```sh
 cd nodejs-solid-apirest
```

### 3. Instalar as dependências:
```sh
 npm install
```

### 4. Configurar as variáveis de ambiente no arquivo .env
![alt text](image-1.png)

##

# Uso:
### 1. Rodar o servidor:
```sh
 npm run dev
```

### 2. A API estará acessível em:
```sh
 http://localhost:####
```

##

# Endpoints:
- `POST /api/auth/create`
```sh
{
    "username": "johndoe",
    "email": "johndoe@example.com",
    "password": "",
    "role": "reader"
}
```
- O campo role pode ser **"reader"**, **"user"** ou **"admin"**. O padrão sempre será "reader" e o usuário só passará a ter a role **user** depois que verificar o email.

#

- `POST /api/auth/email/verify`
```sh
{
    "email": "johndoe@example.com",
    "code": "7Tn3V1"
}
```
- Este endpoint é utilizado para verificar o email do usuário. O código enviado por email deve ser informado aqui para completar a verificação.

#

- `POST /api/auth/login`
```sh
{
    "email": "admin@gmail.com",
    "password": "admin"
}
```
- Sempre haverá um usuário com o role **"admin"** disponível para testar os outros endpoints sem precisar verificar o e-mail.

#

- `DELETE /api/admin/user/delete`
```sh
{
    "id": 4
}
```
- Esse endpoint está disponível apenas para usuários com o role **"admin"**. Ele permite deletar um usuário com base no seu id.

#

- `GET /api/find/user/email`
```sh
{
    "email": "johndoe@example.com"
}
```

#

- `GET /api/find/user/list`
```sh
{
    
}
```
- Não é necessário passar nenhum corpo na requisição, apenas o **token**.