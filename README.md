# Desafio Front-end

## Sumário

- [Sobre o desafio](./CHALLENGE.md)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Rodando a aplicação](#rodando-a-aplicação)
- [Comandos](#comandos)
- [Estrutura de arquivos](#estrutura-de-arquivos)

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

## Estrutura de arquivos

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
│   ├── requestServices.js      -> Página onde acontece as requisições
│   └── transactionServices.js  -> Página onde se monta as requisições
├── settings
│   ├── images.js     -> Import e export das imagens da pasta Assets
│   ├── index.js
│   ├── keys.js       -> Export das rotas de navegação do sistema
│   ├── pt-br         -> Arquivos com os textos em Pt-Br
│   │   ├── components  -> Textos dos componentes
│   │   │   ├── FormCp
│   │   │   └── index.js
│   │   ├── messages    -> Textos das mensagens de alerta/erro
│   │   └── pages       -> Textos das páginas
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
│       └── colors.less   -> Cores utilizadas na aplicação
└── utils
    ├── MaskUtil.js         -> Funções de Máscara para textos
    ├── MessageUtil.js      -> Funções que retornam mensagens no sistema
    ├── ValidationUtil.js   -> Funções de Validações de textos
    └── index.js
```
