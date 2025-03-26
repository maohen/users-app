# Users App

# React + TypeScript + sass + Vite + microfrontend

- Aplicacion frontend desarrollada con React que consume la api de randomuser.me, lista usuarios en una vista principal implementando paginacion y filtro de busqueda por nombre.
.


## Requisitos Previos

### Lista de las dependencias o tecnologías que deben estar instaladas para correr el proyecto.

- Node.js >= 18
- Yarn

## Instalación

Pasos para clonar y configurar el proyecto:

git clone https://github.com/maohen/pokedex-app.git
cd proyecto
npm install

## Ejecución

- yarn dev -> ejecuta el proyecto en local
- yarn build -> compilar una version del proyecto

## Estructura proyecto

src/
│
├── pages/        # Vistas de la aplicacion
├── shared/       # Recursos globales de la aplicacion -> Api, assets, components, helpers, context (estados de la aplicacion)
├── styles/       # Estilos globales de la apliacion 
├── tests/        # Tests unitarios
└── App.js        # Componente principal