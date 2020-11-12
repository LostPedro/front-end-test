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
├── assets
│   └── images
│       └── icons
│           ├── backArrow.png
│           ├── backArrow@2x.png
│           ├── backArrow@3x.png
│           ├── plus.png
│           ├── plus@2x.png
│           └── plus@3x.png
├── components
│   ├── ButtonCp
│   │   ├── __tests__
│   │   │   ├── ButtonCp.test.js
│   │   │   └── __snapshots__
│   │   │       └── ButtonCp.test.js.snap
│   │   ├── index.js
│   │   └── style.less
│   ├── FormCp
│   │   ├── __tests__
│   │   │   ├── FormCp.test.js
│   │   │   └── __snapshots__
│   │   │       └── FormCp.test.js.snap
│   │   ├── customHooks.js
│   │   ├── index.js
│   │   └── style.less
│   ├── InputCp
│   │   ├── __tests__
│   │   │   ├── InputCp.test.js
│   │   │   └── __snapshots__
│   │   │       └── InputCp.test.js.snap
│   │   ├── index.js
│   │   └── style.less
│   ├── LoadingCp
│   │   ├── __tests__
│   │   │   ├── LoadingCp.test.js
│   │   │   └── __snapshots__
│   │   │       └── LoadingCp.test.js.snap
│   │   ├── index.js
│   │   └── style.less
│   ├── NavHeaderCp
│   │   ├── __tests__
│   │   │   ├── NavHeaderCp.test.js
│   │   │   └── __snapshots__
│   │   │       └── NavHeaderCp.test.js.snap
│   │   ├── index.js
│   │   └── style.less
│   └── TransactionListItemCp
│       ├── __tests__
│       │   ├── TransactionListCp.test.js
│       │   └── __snapshots__
│       │       └── TransactionListCp.test.js.snap
│       ├── index.js
│       └── style.less
├── context
│   └── transactionContext.js
├── index.js
├── pages
│   ├── ManagerPg
│   │   ├── index.js
│   │   └── style.less
│   ├── NotFoundPg
│   │   ├── index.js
│   │   └── style.less
│   └── Transactions
│       ├── NewTransactionPg
│       │   ├── index.js
│       │   └── style.less
│       └── TransactionListPg
│           ├── index.js
│           └── style.less
├── serviceWorker.js
├── services
│   ├── index.js
│   ├── requestServices.js
│   └── transactionServices.js
├── settings
│   ├── images.js
│   ├── index.js
│   ├── keys.js
│   ├── pt-br
│   │   ├── components
│   │   │   ├── FormCp
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   ├── index.js
│   │   ├── messages
│   │   │   └── index.js
│   │   └── pages
│   │       ├── ManagerPg
│   │       │   └── index.js
│   │       ├── NotFoundPg
│   │       │   └── index.js
│   │       ├── Transactions
│   │       │   ├── NewTransactionPg
│   │       │   │   └── index.js
│   │       │   └── TransactionListPg
│   │       │       └── index.js
│   │       └── index.js
│   └── routes.js
├── setupTests.js
├── styles
│   ├── globalStyle.less
│   └── variables
│       └── colors.less
└── utils
    ├── MaskUtil.js
    ├── MessageUtil.js
    ├── ValidationUtil.js
    └── index.js
```
