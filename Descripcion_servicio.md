# API de Restaurantes

## Introducción

Este documento describe el servicio de la API de Restaurantes, una aplicación diseñada para gestionar información relacionada con restaurantes, incluyendo comentarios, fotos, tips y usuarios. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) y ofrece funcionalidades adicionales como la integración con APIs externas para obtener datos meteorológicos y direcciones.

## Recursos y Operaciones CRUD

### 1. Restaurantes

- **Listar Restaurantes**
  - **GET** `/api/restaurantes?page={page}&limit={limit}`
  - **Descripción**: Listar todos los restaurantes con paginación.

- **Listar Restaurantes en una zona**
  - **GET** `/api/restaurantes/area?lat={latitude}&lon={longitude}&area={distance}`
  - **Descripción**: Listar todos los restaurantes dentro de una distancia especificada desde un punto geográfico dado.

- **Obtener Detalles de Restaurante**
  - **GET** `/api/restaurantes/{id}`
  - **Descripción**: Obtener detalles de un restaurante específico por `business_id`.

- **Crear Restaurante**
  - **POST** `/api/restaurantes`
  - **Descripción**: Crear un nuevo restaurante.

- **Actualizar Restaurante**
  - **PUT** `/api/restaurantes/{id}`
  - **Descripción**: Actualizar un restaurante específico por `business_id`.

- **Eliminar Restaurante**
  - **DELETE** `/api/restaurantes/{id}`
  - **Descripción**: Eliminar un restaurante específico por `business_id`.

### 2. Comentarios

- **Listar Comentarios por Restaurante**
  - **GET** `/api/comentarios/{id_restaurante}?page={page}&limit={limit}`
  - **Descripción**: Listar comentarios para un restaurante específico con paginación.

- **Crear Comentario**
  - **POST** `/api/comentario/{id_restaurante}`
  - **Descripción**: Crear un nuevo comentario para un restaurante específico.

- **Obtener Detalles de Comentario**
  - **GET** `/api/comentario/{id_comentario}`
  - **Descripción**: Obtener detalles de un comentario específico por `comment_id`.

- **Actualizar Comentario**
  - **PUT** `/api/comentario/{id_comentario}`
  - **Descripción**: Actualizar un comentario específico por `comment_id`.

- **Eliminar Comentario**
  - **DELETE** `/api/comentario/{id_comentario}`
  - **Descripción**: Eliminar un comentario específico por `comment_id`.

### 3. Fotos

- **Listar Fotos por Restaurante**
  - **GET** `/api/photos/{business_id}?limit={limit}`
  - **Descripción**: Listar fotos para un restaurante específico con un límite de resultados.

- **Eliminar Foto**
  - **DELETE** `/api/photos/{photo_id}`
  - **Descripción**: Eliminar una foto específica por `photo_id`.

### 4. Tips

- **Listar Tips por Restaurante**
  - **GET** `/api/tips/business/{business_id}?page={page}&limit={limit}`
  - **Descripción**: Listar tips para un restaurante específico con paginación.

- **Crear Tip**
  - **POST** `/api/tips`
  - **Descripción**: Crear un nuevo tip.

- **Obtener Detalles de Tip**
  - **GET** `/api/tips/{id}`
  - **Descripción**: Obtener detalles de un tip específico por `tip_id`.

- **Actualizar Tip**
  - **PUT** `/api/tips/{id}`
  - **Descripción**: Actualizar un tip específico por `tip_id`.

- **Eliminar Tip**
  - **DELETE** `/api/tips/{id}`
  - **Descripción**: Eliminar un tip específico por `tip_id`.

### 5. Usuarios

- **Obtener Nombre de Usuario**
  - **GET** `/api/users/{user_id}`
  - **Descripción**: Obtener el nombre de un usuario por `user_id`.

### 6. Google Maps

- **Obtener Indicaciones**
  - **GET** `/api/go?business_id={business_id}&originLat={latitude}&originLon={longitude}`
  - **Descripción**: Obtener indicaciones para llegar a un restaurante desde una ubicación actual.

### 7. Open Weather Map

- **Obtener climatología**
  - **GET** `/api/weather?business_id={business_id}`


## Modelos de Datos JSON

### Modelo de Datos para Restaurantes

```json
{
  "business_id": "string",
  "name": "string",
  "address": "string",
  "city": "string",
  "latitude": "number",
  "longitude": "number",
  "stars": "number",
  "review_count": "number",
  "attributes": "object",
  "categories": "string",
  "hours": "object"
}
```

### Modelo de Datos para Comentarios
```json
{
  "review_id": "string",
  "user_id": "string",
  "business_id": "string",
  "stars": "number",
  "useful": "number",
  "funny": "number",
  "cool": "number",
  "text": "string",
  "date": "string"
}
```

### Modelo de Datos para las fotos
```json
{
  "photo_id": "string",
  "business_id": "string",
  "caption": "string",
  "label": "string"
}
```

### Modelo de Datos para los tips
```json
{
  "text": "string",
  "date": "string",
  "business_id": "string",
  "user_id": "string"
}

```

### Modelo de Datos para Usuarios
```json
{
  "user_id": "integer",
  "name": "string",
  "review_count": "number",
}
```


## Obtención de los datos del Dataset
### URL
[yelp](https://www.yelp.com/dataset)

### Descripción
Dataset con 150k establecimientos, 200k imágenes, casi 7M de reviews en más de 11 zonas metropolitanas de EEUU