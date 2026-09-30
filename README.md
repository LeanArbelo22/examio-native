# Examio Native

## Descripción

Examio Native es una aplicación desarrollada con React Native y Expo.

La aplicación busca complementar el sistema Examio y permitir que los alumnos consulten desde el celular sus próximas evaluaciones, fechas, calificaciones y otra información académica.

## Integrantes

- Arbelo Antolin, Leandro (Mat. 30845)
- Eberle, Flavia (Mat. 30184)
- Muscará, Leonardo (Mat. 30620)
- Marcial, Nadia Agustina (Mat. 27253)

## Estado actual

Actualmente la aplicación cuenta con un inicio de sesión simulado y una pantalla de próximas actividades.

El formulario valida campos vacíos y compara los datos ingresados con credenciales mock. Cuando el ingreso es correcto, la información del alumno se guarda en un estado global manejado con Zustand.

La pantalla de inicio muestra al alumno autenticado, permite cerrar la sesión y presenta evaluaciones creadas con datos estáticos.

Todavía no existe conexión con la API de Examio y la sesión no se conserva al cerrar o recargar completamente la aplicación.

## Credenciales de prueba

- Correo: 'alumno@examio.com'
- Contraseña: '123456'

Estas credenciales son solamente datos simulados para esta etapa del proyecto.

## Features previstas

Inicio y cierre de sesión: Implementado (datos mock).

Agenda de proximas evaluaciones: Implementado (datos mock).

Recordatorios de evaluaciones: Pendiente.

Historial de notas y devoluciones: Pendiente.

Resumen del rendimiento academico: Pendiente.

Notificaciones academicas: Pendiente.

## Contenidos aplicados

- View
- Text
- Image
- ScrollView
- TextInput
- TouchableOpacity
- SafeAreaView para evitar superposicion con barra de estrado
- Datos estáticos
- Componentes reutilizables
- Comunicación entre componentes mediante props
- Estado local con useState`
- Estado global con Zustand
- Manejo de 'useEffect' para validar que para ingresar a /inicio el usuario no sea null
- Navegación con Expo Router
- Renderizado de evaluaciones a partir de un array
- Validación de formularios

## Tecnologías utilizadas

- React Native
- Expo
- TypeScript
- Expo Router
- Zustand

## Estructura de archivos y carpetas

- src/app/index.tsx: pantalla de inicio de sesión.
- src/app/inicio.tsx: pantalla principal del alumno.
- src/components/FormularioLogin.tsx: formulario y validación del login.
- src/components/CampoFormulario.tsx: campo reutilizable para formularios.
- src/components/EvaluacionCard.tsx: tarjeta reutilizable para las proximas evaluaciones.
- src/store/autenticacionStore.ts: estado global de autenticación.
- src/data/usuarios.ts: usuario y credenciales mock.
- src/data/evaluaciones.ts: evaluaciones mock.
- src/styles/theme.ts: estilos compartidos de la aplicación.

## Cómo ejecutar el proyecto

1. Instalar las dependencias:

   npm install

2. Iniciar Expo:

   npx expo start

3. Abrir la aplicación en el navegador o escanear el código QR con Expo Go.