# Postory API

**Postory API** é uma aplicação criada com NestJS, desenvolvida para oferecer um sistema simples e eficiente de gerenciamento de posts. Com funcionalidades que incluem criar, listar, atualizar e excluir posts, ela foi projetada para atender às necessidades de aplicações modernas que demandam organização e flexibilidade na manipulação de conteúdo. A API é ideal para ser integrada em projetos que buscam uma solução robusta e fácil de utilizar, garantindo praticidade tanto para os desenvolvedores quanto para os usuários finais.

### Tecnologias Utilizadas
- **NestJS**: Framework para Node.js que facilita a construção de APIs escaláveis e bem estruturadas.
- **Prisma** ORM: ORM (Object-Relational Mapping) para Node.js, usado para interagir com o banco de dados PostgreSQL de maneira eficiente.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar dados dos posts.
- **TypeScript**: Linguagem de programação para garantir maior segurança no desenvolvimento e melhorar a legibilidade do código.

### Exemplo de Requisição e Resposta

#### Criar um Post

**Request Body**

```json
{
  "title": "Introdução ao NestJS com Prisma",
  "content": "NestJS é um framework poderoso para construir aplicações escaláveis em Node.js...",
  "author": "Autor Exemplo",
  "category": "Desenvolvimento Web",
  "tags": ["nestjs", "prisma", "backend"],
  "isPublished": true,
  "publishedAt": "2024-11-27T10:00:00.000Z",
  "thumbnail": "https://example.com/thumbnail.jpg"
}
```

**Resposta**

```json
{
  "post": {
    "id": "79bb8484-09b1-43fc-ac96-109b41da186e",
    "title": "Introdução ao NestJS com Prisma",
    "content": "NestJS é um framework poderoso para construir aplicações escaláveis em Node.js...",
    "author": "Autor Exemplo",
    "category": "Desenvolvimento Web",
    "tags": ["nestjs", "prisma", "backend"],
    "isPublished": true,
    "publishedAt": "2024-11-27T10:00:00.000Z",
    "thumbnail": "https://example.com/thumbnail.jpg",
    "createdAt": "2024-11-27T10:00:00.000Z",
    "updatedAt": "2024-11-27T10:00:00.000Z"
  }
}
```
#### Obter Todos os Posts

**Resposta**

```json
{
  "posts": [
    {
      "id": "79bb8484-09b1-43fc-ac96-109b41da186e",
      "title": "Introdução ao NestJS com Prisma",
      "content": "NestJS é um framework poderoso para construir aplicações escaláveis em Node.js...",
      "author": "Autor Exemplo",
      "category": "Desenvolvimento Web",
      "tags": ["nestjs", "prisma", "backend"],
      "isPublished": true,
      "publishedAt": "2024-11-27T10:00:00.000Z",
      "thumbnail": "https://example.com/thumbnail.jpg",
      "createdAt": "2024-11-27T10:00:00.000Z",
      "updatedAt": "2024-11-27T10:00:00.000Z"
    }
  ]
}
```

#### Obter um Post Específico
**Request Params:**

 * `id`: O ID do post a ser recuperado. Obter um Post Específico

**Resposta**

```json
{
  "post": {
    "id": "79bb8484-09b1-43fc-ac96-109b41da186e",
    "title": "Introdução ao NestJS com Prisma",
    "content": "NestJS é um framework poderoso para construir aplicações escaláveis em Node.js...",
    "author": "Autor Exemplo",
    "category": "Desenvolvimento Web",
    "tags": ["nestjs", "prisma", "backend"],
    "isPublished": true,
    "publishedAt": "2024-11-27T10:00:00.000Z",
    "thumbnail": "https://example.com/thumbnail.jpg",
    "createdAt": "2024-11-27T10:00:00.000Z",
    "updatedAt": "2024-11-27T10:00:00.000Z"
  }
}
```