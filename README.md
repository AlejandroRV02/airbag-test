## Airbag prueba tecnica

# Ejecutar el proyecto

El proyecto consiste en la creacion de una API REST que incluye dos recursos: Users y Vehicles

Herramientas necesarias para ejecutar el proyecto

- Docker && docker compose
- Git

# Una vez clonado el proyecto y tener levantado Docker

```
git switch dev
docker compose up -d
```

Esto deberia construir la imagen del proyecto (airbag-test)
A la vez que levanta una base de datos MongoDB
La aplicación debería estar corriendo en el puerto 3000

## Endpoints

http://localhost:3000/api

## Users

POST - /users

GET /users/:id
    - id: string (mongo id)


# Vehicles

GET     /vehicles/:id
POST    /vehicles
PUT     /vehicles/:id
DELETE  /vehicles/:id