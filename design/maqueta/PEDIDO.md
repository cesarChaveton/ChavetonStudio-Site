# PEDIDO — Sitio: rediseño fase 1 (portada del estudio + página de DominionHex)

Fecha: 2026-10-03. Para: Cursor. Repo: ChavetonStudio-Site (rama main). No hacer push: lo hace el Director.

## Qué hay que hacer
Implementar en el sitio real dos maquetas aprobadas por el Director (revisadas en celular). Las maquetas están en `design/maqueta/`:
- `portada-estudio.html` → pasa a ser `index.html` (portada de Chaveton Studios).
- `dominionhex.html` → reemplaza al actual `dominionhex.html`.
- `img/logo.webp`, `img/crest_hex.webp`, `img/wordmark.webp` (PNG recortados a WebP).
Las maquetas son HTML autocontenido con CSS en línea. Pásalas a la estructura del sitio: CSS compartido en `style.css`, `mail.js` para el correo, imágenes en `img/`. Conserva el diseño, los textos y el orden de secciones. No cambies textos sin avisar.

## Decisiones ya tomadas
- **Primera versión solo Android** (celulares y tablets). iOS: "próximamente". No decir "por ahora no".
- **Gratis y sin publicidad.** Destacar "sin publicidad" (franja propia y pregunta en las frecuentes).
- Las compras de personajes serán dentro del juego, más adelante y fuera del beta. Sin precios ni gemas en el sitio.
- **Sin internet para jugar** (datos locales, sin cuenta). Esto cambia si sale la versión con Firebase: deja un comentario HTML junto a la pregunta frecuente "¿Necesito internet?" y la tarjeta "Dónde corre" para actualizarlos entonces.
- Sección "Próximamente a la venta: nuevos escenarios" con `scenario_vikingo_proximamente.jpg` (ya estaba en el sitio).
- Modos: contra la IA, dos jugadores, contra reloj.

## Tipografía
Cinzel (solo logotipo y títulos grandes) y EB Garamond (todo lo demás). Son las del juego, licencia SIL OFL 1.1.
- Aloja las fuentes en el repo (carpeta `fonts/`), sin cargarlas desde Google Fonts. Usa los TTF del juego y copia sus `OFL.txt`. Declara `@font-face` con `font-display: swap`.
- En `ChavetonStudios-AssetLibrary/catalog/ASSET_CATALOG.v2.yaml`: elimina las entradas `fraunces` y `public_sans` (ya no se usan) y registra el uso de `cinzel` y `eb_garamond` en el sitio. Commitea el catálogo por separado.

## Logos (confirmar)
La maqueta usa `logo.png` del sitio, `crest_hex.png` y `dominion_hex_wordmark.png` del juego. El juego también tiene `chaveton_studios_logo_v3.png` y `v2`. Dime cuál es el logo oficial del estudio hoy y úsalo. Si cambia, reexporta a WebP con fondo transparente.

## Comportamiento
- Menú: en pantallas de hasta 700 px, botón de tres rayas que abre una lista (Estudio, Juegos, Escríbenos). Debe poder usarse con teclado y cerrar al elegir una opción.
- Enlaces: Estudio → `index.html#estudio`; Juegos → `juegos.html` o la sección del juego; el botón del beta y "Escríbenos" usan el `mailto` de `mail.js`.
- Mantén el mailto, pero cambia el cuerpo: pide el correo de la cuenta de Google Play y el modelo de teléfono o tablet Android. Quita TestFlight.
- Botón principal del beta: "Pide acceso al beta".
- Capturas y retratos: las que ya subiste (WebP). Revisa que `shot_*.webp` carguen con `loading="lazy"` y tamaños `width`/`height` para evitar saltos de página.
- Los efectos al pasar el mouse sobre celulares y capturas se mantienen; respeta `prefers-reduced-motion`.

## Pendiente de la maqueta (para una fase siguiente, no ahora)
- Arte de hexágonos, botones y base de ficha: lo pedimos a ChatGPT. Por ahora quedan como CSS.
- `juegos.html` y `privacy.html`: rediseño después. Solo ajusta menú y fuentes para que no se rompan.
- Fecha de la política de privacidad ("COMPLETAR FECHA") sigue pendiente.

## Informe de vuelta
Commits (sin push), lista de páginas tocadas, qué logo quedó, y cualquier texto que hayas tenido que cambiar.
