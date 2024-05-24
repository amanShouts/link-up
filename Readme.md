To run Project

add environment variables in .env file
`cp .env.example .env`

```
To Run With Docker

    1. In Linux
        > docker compose up
    2. In Windows
        > docker-compose up

```

```
To Run Normally
    1. Get Postgres connection string
        Through Docker
        if use docker : docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=admin123 postgres
        connection string : postgresql://postgres:admin123@localhost:5432/postgres

        Or use online postgres db from neon.tech, etc.

    1. For Backend
        a. Go to backend directory
        b. npm install
        c. change DATABASE_URL in env to your postgres connection string
        d. npx prisma migrate dev
        e. npx prisma generate
        (step d & e repeat whenever schema.prisma changes)
        f. npm run dev

    2. For Frontend
        a. Go to frontend directory
        b. npm install
        c. npm run dev
```

#### Note:

To seed dummy data while running with docker :
`docker exec link_up_backend npm run db:seed`

In normal install run :
`npm run db:seed`