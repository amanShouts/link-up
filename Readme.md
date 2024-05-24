To run Project locally

1. add environment variables in .env file
    ```
    cp .env.example .env
    ```

2. Run Docker image using docker-compose

    1. In Linux
        > docker compose up
    2. In Windows
        > docker-compose up

# Note:
To seed dummy data while running with docker :
`docker exec link_up_backend npm run db:seed`

In normal install run : 
`npm run db:seed`