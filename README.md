# Proyecto Patria - Sitio Web Oficial

Sitio web oficial de Proyecto Patria, una organizacion sin fines de lucro dedicada a unificar esfuerzos por la libertad y el progreso de Cuba.

## Tecnologias

- **Framework**: Next.js 16
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Despliegue**: Vercel

## Estructura del Proyecto

```
proyecto-patria-web/
├── src/
│   ├── app/                 # Paginas de la aplicacion
│   │   ├── about/          # Pagina Acerca de
│   │   ├── blog/           # Blog
│   │   ├── colaboradores/  # Pagina de colaboradores
│   │   ├── contacto/       # Formulario de contacto
│   │   ├── documentos/     # Documentos legales
│   │   ├── privacidad/     # Politica de privacidad
│   │   ├── layout.tsx      # Layout principal
│   │   ├── page.tsx        # Pagina de inicio
│   │   └── globals.css     # Estilos globales
│   └── components/         # Componentes reutilizables
│       ├── Header.tsx
│       └── Footer.tsx
├── public/
│   ├── images/            # Imagenes del sitio
│   └── documents/         # PDFs y documentos
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Desarrollo Local

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar servidor de desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Construccion para Produccion

```bash
npm run build
```

Los archivos estaticos se generaran en la carpeta `out/`.

## Despliegue

Este sitio esta configurado para desplegarse automaticamente en Vercel. Cada push a la rama `main` activa un nuevo despliegue.

## Contenido Original

Este sitio fue migrado del sitio WordPress original en proyectopenpatria.com, preservando todo el contenido, imagenes y documentos.

## Licencia

Copyright (c) 2025 Proyecto Patria. Todos los derechos reservados.
