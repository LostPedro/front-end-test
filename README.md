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

#### Estrutura de componentes

```
├── ButtonCp                            // [Nome do Component] + Cp
│   │   ├── __tests__                     // pasta de testes
│   │   │   ├── ButtonCp.test.js            // arquivo de Teste
│   │   │   └── __snapshots__             // pasta de snapshots
│   │   │       └── ButtonCp.test.js.snap   // Snapshot
│   │   ├── index.js                      // Componente funcional
│   │   └── style.less                    // Estilos especificos do componente
```

#### Estrutura de paginas

```
├── ButtonPg          // [Nome do Component] + Pg
│   │   ├── index.js    // Componente de classe
│   │   └── style.less  // Estilos especificos do componente
```

#### Estrutura do projeto

Segue aqui uma representaçao da estrutura de arquivos do projeto dentro da pasta `src`

```
── assets
│   └── images
│       └── icons
├── components
│   ├── ButtonCp
│   ├── FormCp
│   ├── InputCp
│   ├── LoadingCp
│   ├── NavHeaderCp
│   └── TransactionListItemCp
├── context
│   └── transactionContext.js
├── index.js
├── pages
│   ├── ManagerPg
│   ├── NotFoundPg
│   └── Transactions
│       ├── NewTransactionPg
│       └── TransactionListPg
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
│   │   │   └── index.js
│   │   ├── messages
│   │   └── pages
│   │       ├── ManagerPg
│   │       ├── NotFoundPg
│   │       ├── Transactions
│   │       │   ├── NewTransactionPg
│   │       │   └── TransactionListPg
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
