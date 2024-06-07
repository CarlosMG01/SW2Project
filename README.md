# Proyecto de Sistema de Reservas Inteligente para Restaurantes

## Miembros del Equipo
- Carlos Marcos Guillem

## Temática
Este proyecto desarrollará una API para gestionar un sistema inteligente de restaurantes. Esta API permitirá gestionar múltiples restaurantes, ofreciendo información como la climatología o las guías para llegar a los establecimientos.

## Recursos Externos
Utilizamos datos de la API de [OpenWeatherMap](https://openweathermap.org) para obtener información sobre la temperatura, precipitaciones, índice UV y contaminación del aire. Esta información será usada para ofrecer recomendaciones de mesas basadas en las condiciones meteorológicas actuales.

Además utilizamos la API de [GoogleMaps](https://https://maps.google.com/) para obtener información sobre cómo llegar a los establecimientos desde la ubicación del cliente

En caso de que la API externa esté caída o no haya conectividad, se seguirán mostrando la información básica sobre los establecimientos pero sin estos datos extras.

## API REST
La API proporcionará una interfaz REST con las siguientes funcionalidades:

### Restaurantes
- `GET /api/restaurantes?page={page}&limit={limit}`: Obtener todos los restaurantes con paginación.
- `POST /api/restaurantes`: Crear un nuevo restaurante.
- `GET /api/restaurantes/:id`: Obtener información extendida de un restaurante por `business_id`.
- `PUT /api/restaurantes/:id`: Actualizar un restaurante por `business_id`.
- `DELETE /api/restaurantes/:id`: Eliminar un restaurante por `business_id`.
- `GET /api/restaurantes/area?lat={latitude}&lon={longitude}&area={distance}`: Obtener restaurantes en un área determinada.

### Comentarios
- `GET /api/comentarios/:id_restaurante?page={page}&limit={limit}`: Obtener comentarios por `business_id` con posibilidad de paginación.
- `POST /api/comentarios/:id_restaurante`: Crear un nuevo comentario.
- `GET /api/comentarios/:id_comentario`: Obtener un comentario por `comment_id`.
- `PUT /api/comentarios/:id_comentario`: Actualizar un comentario por `comment_id`.
- `DELETE /api/comentarios/:id_comentario`: Eliminar un comentario por `comment_id`.

### Fotos
- `GET /api/photos/:business_id?limit={limit}`: Obtener fotos por `business_id` con un límite.
- `DELETE /api/photos/:photo_id`: Eliminar una foto por `photo_id`.

### Tips
- `GET /api/tips/business/:business_id?page={page}&limit={limit}`: Obtener tips por `business_id` con un límite.
- `POST /api/tips`: Crear un nuevo tip.
- `GET /api/tips/:id`: Obtener un tip por `tip_id`.
- `PUT /api/tips/:id`: Actualizar un tip por `tip_id`.
- `DELETE /api/tips/:id`: Eliminar un tip por `tip_id`.

### Usuarios
- `GET /api/users/:user_id`: Obtener el nombre de un usuario por `user_id`.

### Google Maps
- `GET /api/go?business_id={business_id}&originLat={latitude}&originLon={longitude}`: Obtener indicaciones para llegar a un restaurante desde una ubicación actual.

## Base de Datos
Utilizaremos MongoDB para almacenar toda la información relacionada con los restaurantes, incluyendo sus características y disponibilidades, así como los datos de los usuarios y las reservas.

### Carga Inicial de Datos
Para cargar los datos iniciales en la base de datos MongoDB, sigue estos pasos:

1. Asegúrate de que los archivos JSON están en el directorio `./yelp_dataset/`.
2. Ejecuta el siguiente comando para dar permisos de ejecución al script de carga de datos:
    ```sh
    chmod +x loadData.sh
    ```
3. Ejecuta el script para importar los datos:
    ```sh
    ./loadData.sh
    ```