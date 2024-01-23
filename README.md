# Projeto React de um grid de vídeos

## Sobre o projeto

- Projeto de um grid de vídeos, feito em React e nestjs. O trabalho conquiste em um grid de vídeos, onde o usuário pode adicionar vídeos, editar e excluir, seguindo o padrão de um CRUD. Também foi implementado o backend em python hospedado na aws lambda, onde la é feito a persistência dos dados e todos as validações necessárias para acessar o banco de dados, onde foi utilizado o dynamoDB, também foi implementado a validação dos dados que o usuário envia para o backend. Foi utilizado o Nestjs para fazer a comunicação entre o front e o backend utilizando o rauter handler. O projeto foi feito utilizando o TailwindCSS para estilizar o projeto, Material UI para fazer a estilização dos componentes do React, Material icons para os ícones, estilização de um novo modelo de play de video e o axios para fazer as requisições para o backend.

## Tecnologias utilizadas

### Front-end

- [ReactJS](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Material UI](https://material-ui.com/pt/)
- [Material icons](https://material-ui.com/pt/components/material-icons/)
- [Axios](https://axios-http.com/)
- [NestJS](https://nestjs.com/)

### Back-end

- [Python](https://www.python.org/) 
- [AWS Lambda](https://aws.amazon.com/pt/lambda/)
- [AWS DynamoDB](https://aws.amazon.com/pt/dynamodb/)
- [NestJS](https://nestjs.com/)
- [AWS API Gateway](https://aws.amazon.com/pt/api-gateway/)

## Passo  usado para criar o projeto

- Criar o projeto React

```bash
npx create-react-app grid_videos --template typescript
```

- Instalar o TailwindCSS

```bash
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

- Criar o arquivo de configuração do TailwindCSS

```bash
npx tailwindcss init -p
```

OBS: como inciei o projeto a partir do Nestjs foi solicitado algumas configurações padrão incluindo o arquivo de configuração do TailwindCSS

- Para intalar todas as dependências do projeto

```bash
npm install
```

## Back-end

### AWS Lambda

- voce pode consultar a documentação do backend [aqui](./backend/README.md)
