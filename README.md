# Examio Native

## Descripción

Examio Native es una aplicación desarrollada con React Native y Expo.

La aplicación busca complementar el sistema Examio y permitir que los alumnos consulten desde el celular sus próximas evaluaciones, fechas, calificaciones y otra información académica.

## Integrantes

- Arbelo Antolin, Leandro (Mat. 30845)
- Avila, Nicolas (Mat. 30866) 
- Eberle, Flavia (Mat. 30184) 
- Muscará, Leonardo (Mat. 30620)
- Marcial, Nadia Agustina (Mat. 27253)

## Estado actual

Actualmente se encuentra desarrollada la primera versión de la pantalla principal.

Esta versión utiliza datos estáticos y muestra una lista de próximas evaluaciones mediante un componente reutilizable llamado `EvaluacionCard`.

Todavía no existe conexión con la API de Examio.

## Features previstas

| Feature | Estado |
|---|---|
| Inicio y cierre de sesión | Pendiente |
| Agenda de próximas evaluaciones | En desarrollo |
| Recordatorios de evaluaciones | Pendiente |
| Historial de notas y devoluciones | Pendiente |
| Resumen del rendimiento académico | Pendiente |
| Validación de acceso mediante código QR | Pendiente |
| Notificaciones académicas | Pendiente |

## Contenidos aplicados en la primera entrega

- View
- Text
- Image
- ScrollView
- Datos estáticos
- Componentes reutilizables
- Comunicación entre componentes mediante props
- Renderizado de evaluaciones a partir de un arreglo

## Tecnologías utilizadas

- React Native
- Expo
- TypeScript
- Expo Router

## Cómo ejecutar el proyecto

1. Instalar las dependencias:

   ```bash
   npm install

2. Iniciar Expo:

   ```bash
   npx expo start

3. Abrir la aplicación en el navegador o escanear el código QR con Expo Go.