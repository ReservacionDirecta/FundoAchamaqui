# Arquitectura y Diseño del Sistema

Este documento describe la arquitectura y las soluciones técnicas implementadas en la transición de Webflow a Next.js para el proyecto del **Hotel Fundo Achamaqui**.

## 1. Diseño Responsivo Móvil de Habitaciones
* **Grilla responsiva**: Se reemplazó la grilla rígida de 4 columnas de Webflow (`grid-3`) por una grilla adaptable (`grid`) que se reestructura automáticamente a 1 columna en móviles (`max-width: 767px`) y a 2 en escritorio.
* **Flexbox responsivo**: La clase `.info-room-wrapper` fue corregida en `globals.css`. En escritorio, las secciones de texto (`left-info-room`) y servicios/iconos (`right-info-room`) se alinean horizontalmente (lado a lado), mientras que en pantallas móviles se apilan de forma ordenada y se centran para una legibilidad óptima.

## 2. SEO y Metadatos Dinámicos
Se implementó el estándar de Next.js Metadata API en todas las páginas públicas del sitio para asegurar un posicionamiento orgánico excelente:
* **Páginas estáticas**: `/rooms`, `/blog`, `/nosotros` y la página de inicio cuentan con metadatos optimizados (títulos SEO, meta descripciones atractivas y configuraciones para robots).
* **Páginas dinámicas**: `/rooms/[slug]` y `/blog/[slug]` utilizan la función `generateMetadata` de Next.js para consultar de forma asíncrona en la base de datos a través de Prisma y generar títulos SEO únicos y descripciones basadas en los nombres de las habitaciones y los resúmenes de las publicaciones.

## 3. Blog CMS Completamente Funcional
Se desarrolló un sistema de gestión de contenidos (CMS) para el blog para prescindir de dependencias externas:
* **Ruta del panel**: Accesible en `/admin/blog`.
* **Operaciones CRUD**:
  - **Create**: Formulario interactivo para registrar un nuevo post con título, slug autogenerado (slugify), resumen, contenido en formato HTML e imagen principal.
  - **Read**: Listado interactivo en tiempo real con miniaturas de imágenes y metadatos.
  - **Update**: Modal/formulario para editar cualquier campo de las publicaciones ya guardadas.
  - **Delete**: Eliminación segura con confirmación nativa del navegador.
* **Server Actions**: La lógica CRUD se ejecuta en el servidor usando Server Actions de Next.js en `actions/blog.ts`, las cuales revalidan automáticamente las rutas afectadas (`/blog`, `/nosotros`, `/blog/[slug]`) utilizando `revalidatePath` para actualizar instantáneamente la caché del sitio web.
