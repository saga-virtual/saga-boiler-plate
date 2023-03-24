# SAGA Virtual Projects Boiler Plate

- Backend: Laravel v9
- Frontend: Framework7 v7

## Instalação Backend

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

## Instalação FrontEnd

```bash
npm install
npm run dev
```

## Importante
Você deve indicar no arquivo ./frontend/.env o endereço da API (Backend).

```shell
VITE_API_URL_DEV=http://127.0.0.1:8000/api/
VITE_API_URL_PRODUCTION=https://api.saga-apps.com/api/
```
## Primeiro Login
Usuário: admin@admin.com<br>
Senha: admin

## Utilizando o arquivo init.sh
Esse script irá inicializar o backend e o frontend, e também permite que você não precise instalar o PHP na sua máquina.
Você deve possuir o Docker e o Docker Compose instalado e o concurrently (npm install -g concurrently).
No arquivo .env da raiz do projeto fica o nome da aplicação e o network que será utilizada para configurar os containers.

```shell
APP_NAME=saga
APP_NETWORK=saga-network
```

Após alterar o arquivo, deverá também indicar no docker-compose o network.
Feito isso basta rodar docker-compose build e docker-compose up -d
Caso não tenha feito os procedimentos de instalação do backend pois não tinha o PHP, o indicado é que utilize o comando

```shell
docker ps
docker exec -it nomedocontainer-laravel bash
```

Através desse bash será possível rodar todos os comandos PHP.
