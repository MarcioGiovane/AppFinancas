# **Teste de EndPoints**


Usando o Postman import o arquivo **App Finança.postman_collection.json**.

## **Testando Usuário**

**Criando Novo usuário**

URL: (POST) http://localhost:3001/auth/register

Body: 

{
	"name": "Marcos",
	"cpf": "12345678900",
	"email": "marcos@email.br",
	"password": "123456"
}

**Respostas:**

1. Caso haja um usuario cadastro com o mesmo cpf.

Status: 400
{
  "error": "CPF already exists"
}

2. Caso não haja um usuário cadastrado com o cpf.

Status: 200
{
    "id": 75,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUsImlhdCI6MTU2Nzc5NTc0MSwiZXhwIjoxNTY3ODgyMTQxfQ.mAOeoyffmaLGsPYBIVFosWB9z7k_5tspm-PkZMieoK4"
}

**Autenticando Usuário**

URL: (POST) http://localhost:3001/auth/authenticate

Body: 

{
	"cpf": "12345679800",
	"password": "123456"
}

**Respostas:**

1. Caso o CPF não esteja cadastrado.

Status: 400
{
  "error": "User not exist"
}

2. Caso o CPF esteja cadastrado, mas a senha errada.

Status: 401
{
  "error": "Password wrong"
}

3. Caso o CPF esteja cadastrado e a senha correta.
Status: 200
{
    "id": 74,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsImlhdCI6MTU2Nzc5NjI0OSwiZXhwIjoxNTY3ODgyNjQ5fQ.ukcyswqMo9958j10zg--wa-M-croPSW4tVXB45dwEV0"
}
