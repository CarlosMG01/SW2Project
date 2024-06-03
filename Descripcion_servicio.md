# API de Reservas de Restaurantes

## Recursos y Operaciones CRUD

### 1. Restaurantes

- **Listar Restaurantes**
  - **GET** `/restaurantes`
  - **Descripción**: Listar todos los restaurantes con posibilidad de filtros por ubicación, tipo de cocina, y capacidad máxima.

- **Obtener Detalles de Restaurante**
  - **GET** `/restaurantes/{id}`
  - **Descripción**: Obtener detalles de un restaurante específico.

- **Crear Restaurante**
  - **POST** `/restaurantes`
  - **Descripción**: Crear un nuevo restaurante.

- **Actualizar Restaurante**
  - **PUT** `/restaurantes/{id}`
  - **Descripción**: Actualizar un restaurante específico.

- **Eliminar Restaurante**
  - **DELETE** `/restaurantes/{id}`
  - **Descripción**: Eliminar un restaurante específico.

### 2. Reservas

- **Listar Reservas**
  - **GET** `/reservas`
  - **Descripción**: Listar todas las reservas con filtros por fecha, restaurante y usuario.

- **Obtener Detalles de Reserva**
  - **GET** `/reservas/{id}`
  - **Descripción**: Obtener detalles de una reserva específica.

- **Crear Reserva**
  - **POST** `/reservas`
  - **Descripción**: Crear una nueva reserva.

- **Actualizar Reserva**
  - **PUT** `/reservas/{id}`
  - **Descripción**: Modificar una reserva existente.

- **Cancelar Reserva**
  - **DELETE** `/reservas/{id}`
  - **Descripción**: Cancelar una reserva.

### 3. Usuarios

- **Listar Usuarios**
  - **GET** `/usuarios`
  - **Descripción**: Listar todos los usuarios.

- **Obtener Detalles de Usuario**
  - **GET** `/usuarios/{id}`
  - **Descripción**: Obtener detalles de un usuario específico.

- **Registrar Usuario**
  - **POST** `/usuarios`
  - **Descripción**: Registrar un nuevo usuario.

- **Actualizar Usuario**
  - **PUT** `/usuarios/{id}`
  - **Descripción**: Actualizar información de un usuario.

- **Eliminar Usuario**
  - **DELETE** `/usuarios/{id}`
  - **Descripción**: Eliminar un usuario.

## Modelos de Datos JSON

### Modelo de Datos para Restaurantes

```json
{
  "id": "integer",
  "nombre": "string",
  "ubicación": {
    "dirección": "string",
    "ciudad": "string",
    "estado": "string",
    "país": "string",
    "códigoPostal": "integer"
  },
  "tipoCocina": "string",
  "capacidadMaxima": "number",
  "telefono": "integer",
  "email": "string",
  "horario": {
    "apertura": "string (HH:mm)",
    "cierre": "string (HH:mm)"
  },
  "caracteristicasEspeciales": [
    "string"
  ],
  "disponibilidadTerraza": "boolean"
}
```

### Modelo de Datos para las Reservas
```json
{
  "id": "integer",
  "fecha": "string (YYYY-MM-DD)",
  "hora": "string (HH:mm)",
  "numeroPersonas": "number",
  "idRestaurante": "integer",
  "idUsuario": "integer",
  "estado": "string (opciones: 'confirmada', 'cancelada', 'pendiente')"
}
```

### Modelo de Datos para Usuarios
```json
{
  "id": "integer",
  "nombre": "string",
  "correoElectronico": "string",
  "telefono": "string",
  "preferencias": {
    "tipoCocina": "string",
    "accesibilidad": "boolean"
  }
}
```

## Modelos de Datos XML

### Modelo de Datos para Restaurantes

```xml
<Restaurante>
  <id>integer</id>
  <nombre>string</nombre>
  <ubicación>
    <dirección>string</dirección>
    <ciudad>string</ciudad>
    <estado>string</estado>
    <país>string</país>
    <códigoPostal>integer</códigoPostal>
  </ubicación>
  <tipoCocina>string</tipoCocina>
  <capacidadMaxima>number</capacidadMaxima>
  <telefono>integer</telefono>
  <email>string</email>
  <horario>
    <apertura>string (HH:mm)</apertura>
    <cierre>string (HH:mm)</cierre>
  </horario>
  <caracteristicasEspeciales>
    <caracteristica>string</caracteristica>
  </caracteristicasEspeciales>
  <disponibilidadTerraza>boolean</disponibilidadTerraza>
</Restaurante>
```

### Modelo de Datos para las Reservas

``` xml
<Reserva>
  <id>integer</id>
  <fecha formato="YYYY-MM-DD">string</fecha>
  <hora formato="HH:mm">string</hora>
  <numeroPersonas>number</numeroPersonas>
  <idRestaurante>integer</idRestaurante>
  <idUsuario>integer</idUsuario>
  <estado opciones="confirmada, cancelada, pendiente">string</estado>
</Reserva>
```

### Modelo de Datos para Usuarios

```xml
<Usuario>
  <id>integer</id>
  <nombre>string</nombre>
  <correoElectronico>string</correoElectronico>
  <telefono>integer</telefono>
  <preferencias>
    <tipoCocina>string</tipoCocina>
    <accesibilidad>boolean</accesibilidad>
  </preferencias>
</Usuario>
```

## Obtención de los datos del Dataset
### URL
[text](https://www.kaggle.com/datasets/himanshupoddar/zomato-bangalore-restaurants)

### Descripción
Dataset de 12K restuarantes de Bengaluru, India. Este Dataset es idoneo para el proyecto ya que, aunque es bastante pesado, tiene todos los datos necesarios para poder realizar las operaciones necesarias.