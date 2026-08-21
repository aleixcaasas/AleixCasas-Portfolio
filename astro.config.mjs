import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Desplegado en Netlify en la raíz del dominio.
// OJO: no volver a poner `base`, es lo que rompía las rutas de las imágenes.
export default defineConfig({
  site: 'https://aleixcaasas.netlify.app',
  integrations: [tailwind()],
});
