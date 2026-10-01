# Portafolio · Hanssell José Cerda Woo

Portafolio personal de desarrollo, construido con Angular y Tailwind CSS, y publicado en GitHub Pages.

## Desarrollo

```bash
npm install
npm start
```

## Agregar un proyecto

Edita `src/app/data/projects.ts` y añade un objeto a la lista `PROYECTOS`. El archivo incluye un ejemplo comentado.

## Despliegue

Cada push a `main` compila y publica el sitio con GitHub Actions (`.github/workflows/deploy.yml`).
En GitHub: Settings → Pages → Source: **GitHub Actions**.

Sitio: https://hanscerdawoo.github.io/portafolio/
