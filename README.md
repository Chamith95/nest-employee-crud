<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest



  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This service is built with Nestjs with postgresSQL db along with prisma



## Installation

```bash
$ npm install
```


## DB setup

1 .PostgresSQL Server Needs to be installed , then update the DATABASE_URL in .env file 

```bash
$ postgresql://USER:PASSWORD@HOST:PORT/DATABASE
```

if need to use different db update prisma/prisma.schema

```bash
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

more Info 

https://www.prisma.io/docs/orm/overview/databases/postgresql

https://www.prisma.io

## DB Migartions and Initial Data

After setting up everything correctly run

```bash
npx prisma migrate dev --name init
```
This command does two things:

1. It creates a new SQL migration file for this migration
2. It runs the SQL migration file against the database

more Info 

https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql


You can run the following command to populate initial data from employee.json

```bash
npm run seed:employees
```


## Running the app


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Swagger should be available in http://localhost:3005/employees/swagger