# Guía de Habilidades y Convenciones de Código

Este documento detalla las directrices de desarrollo de software para el equipo de desarrollo de **Hotel Fundo Achamaqui**.

## Stack Tecnológico Principal
* **Next.js**: Framework React para renderizado en servidor y desarrollo ágil.
* **React 19**: Biblioteca de interfaz de usuario.
* **Prisma ORM**: Interacción con la base de datos PostgreSQL.
* **Vanilla CSS**: Control fino sobre el sistema de estilos adaptado desde Webflow.

## Convenciones de Código
1. **Separación de Componentes**: Separar lógica del servidor de la lógica del cliente. El cliente debe utilizar `"use client"` únicamente cuando dependa de hooks de React.
2. **Server Actions**: Usar archivos de acciones (ej. `actions/blog.ts`) marcados con `"use server"` para mutaciones de base de datos directas desde componentes de cliente.
3. **Responsive Web Design**: Asegurar que las grillas de diseño usen breakpoints limpios (móvil: `<768px`, tableta: `<992px`, escritorio: `>=992px`).
4. **Respeto a las Plantillas de Webflow**: Reutilizar las clases del export de Webflow en la medida de lo posible para mantener la consistencia estética, pero aplicando anulaciones en `globals.css` para resolver bugs de responsividad.
5. **SEO Activo**: Exportar objetos `metadata` estáticos o implementar funciones `generateMetadata` dinámicas en cada archivo `page.tsx` público.
