# Proyecto de Sistema de Reservas Inteligente para Restaurantes

## Miembros del Equipo
- Carlos Marcos Guillem

## Temática
Este proyecto desarrollará una API para gestionar un sistema de reservas inteligente para restaurantes. Esta API permitirá gestionar múltiples restaurantes, considerando aspectos como la disponibilidad de mesas, los horarios del establecimiento, y el tipo de cocina que ofrecen. También se harán recomendaciones personalizadas a los clientes, tales como la asignación de mesas en la terraza, mesas con buena accesibilidad o adecuadas para niños pequeños.

## Recursos Externos
Utilizaremos datos de la API de [OpenWeatherMap](https://openweathermap.org) para obtener información sobre la temperatura, precipitaciones, índice UV y contaminación del aire. Esta información será usada para ofrecer recomendaciones de mesas basadas en las condiciones meteorológicas actuales.

En caso de que la API externa esté caída o no haya conectividad, se seguirán mostrando las opciones de reserva pero sin estas recomendaciones específicas.

## API REST
La API proporcionará una interfaz REST con las siguientes funcionalidades:
1. Obtener una lista de restaurantes, con filtros por ubicación, tipo de cocina y capacidad máxima.
2. Acceder a información sobre las reservas con opciones de paginación y filtros por fecha y restaurante.
3. Consultar información sobre los usuarios, incluyendo nombres, correos electrónicos y números de teléfono.

## Base de Datos
Utilizaremos MongoDB para almacenar toda la información relacionada con los restaurantes, incluyendo sus características y disponibilidades, así como los datos de los usuarios y las reservas.
