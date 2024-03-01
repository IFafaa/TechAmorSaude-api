# Tecnologias

- Back-end:
NestJS,
TypeORM

- DataBase: 
MySQL

# Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

* Node.js (versão 20 ou superior)
* Docker

# Iniciando o projeto

## Rodando apenas a API
Siga as etapas abaixo para iniciar o projeto em sua máquina local:

Clone este repositório para o diretório desejado em sua máquina:

```
git clone https://github.com/IFafaa/TechAmorSaude-api
```

Navegue até o diretório do projeto:

```
cd TechAmorSaude-api
```

Instale as dependências do projeto utilizando o npm (gerenciador de pacotes do Node.js):

```
npm install
```

Após a conclusão da instalação das dependências, você pode iniciar o servidor de desenvolvimento executando o seguinte comando:

```
npm run start:dev
```

## Rodando o Docker Compose do MySQL e da API

Clone este repositório para o diretório desejado em sua máquina:

```
git clone https://github.com/IFafaa/TechAmorSaude-api
```

Navegue até o diretório do projeto:

```
cd TechAmorSaude-api
```

Inicialize o docker compose:

```
docker-compose up
```

Após a conclusão da inicializacao do compose, você pode acessar o servidor de desenvolvimento atraves da porta localhost:3000/


# Estrutura

O projeto utiliza de uma estrutura de pastas a nivel de modulos com as principais pastas sendo:

* <b>Database</b>: Esta pasta contém arquivos essenciais para a integração com um banco de dados. Aqui, você pode encontrar scripts de criação de banco de dados, arquivos de configuração de conexão ou até mesmo arquivos de migração de banco de dados.

* <b>Common</b>: Onde ficarão os arquivos utilizados em todo o projeto - Ex: Enums, Helpers, interfaces, middlewares, services, templates;

* <b>Modules</b>: São as páginas do nosso projeto onde estarão os fluxos.

Dentro de um módulo, é comum criar segmentos de pastas adicionais para organizar os diferentes tipos de artefatos que são específicos daquele módulo. Alguns exemplos comuns de segmentos de pastas dentro de um módulo incluem  <b>Dtos</b>,  <b>Entities</b>,

* <b>Dtos</b>: O segmento de pastas Dtos é usado para realizar a validacao das requests.

* <b>Entities</b>: O segmento de pastas Entities é usado para armazenar as entidades do meu BD.


A criação desses segmentos de pastas ajuda a manter uma estrutura organizada do código, tornando mais fácil encontrar e gerenciar os diferentes artefatos relacionados ao módulo. Cada módulo pode ter sua própria estrutura de pastas específica, dependendo das necessidades e complexidade do aplicativo. Deixando ela escalavel para novos modulos caso o projeto necessite

