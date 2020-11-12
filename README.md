# Desafio Front-end

## Sumário

- [Sobre o desafio](./CHALLENGE.md)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Comandos](#comandos)

## Requisitos

- Node v12.18.2 +
- Yarn v1.22.0 +

## Instalação

Execute o comando `yarn`.

## Rodando a aplicação

1. Renomeie o arquivo `db.example.json` localizado na pasta `server` para `db.json`;
1. Execute `yarn server` para executar a API;
1. Execute `yarn start` para rodar a aplicação React.

## Comandos

O produto deve ser construído na base provida aqui. Para conhecer os comandos disponíveis, visite o `package.json`, mas seguem alguns comandos abaixo:

- `yarn start`: executa o projeto
- `yarn build`: cria o build para produção
- `yarn test`: executa os testes
- `yarn server`: executa a api para usar com o projeto
  - Precisa que o arquivo `db.example.json` seja renomeado para `db.json`.
- `yarn format`: altera a sintaxe dos arquivos para formatação do eslint

## Estrutura de Arquivos

Segue aqui um breve resumo da estrutura basica de arquivos dentro da pasta `src`

```
+-- src
|   +-- assets
|   |   +-- images
|   |   |   +-- icons
|   +-- components
|   |   +-- NameCp
|   |   |   +-- __tests__
|   |   |   |   +-- NameCp.test.js
|   |   |   +-- index.js
|   |   |   +-- style.less
|   +-- context
|   +-- pages
|   |   +-- NamePg
|   |   |   +-- index.js
|   |   |   +-- style.less
|   |   +-- EtcPages
|   |   |   +--  EtcPg
|   |   |   |   +--  index.js
|   |   |   |   +--  style.less
|   +-- services
|   |   +-- index.js
|   |   +-- requestServices.js
|   |   +-- transactionServices.js
|   +-- settings
|   |   +-- pt-br
|   |   |   +--  components
|   |   |   +--  messages
|   |   |   +--  pages
|   |   |   +--  index.js
|   |   +-- images.js
|   |   +-- index.js
|   |   +-- keys.js
|   |   +-- routes.js
|   +-- styles
|   |   +-- variables
|   |   |   +--  colors.less
|   |   +-- globalStyle.less
|   +-- utils
|   |   +-- MaskUtil.js
|   |   +-- MessageUtil.js
|   |   +-- ValidationUtil.js
|   +-- .prettierrc.js
|   +-- index.js
|   +-- serviceWorker.js
|   +-- setupTests.js
```
