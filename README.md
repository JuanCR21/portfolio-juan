# Portfolio Personal — Juan Chicharro Ruiz

Portfolio personal desarrollado como práctica del módulo de Entornos de Desarrollo / Proyecto del ciclo **1º DAM** en el IES Gregorio Prieto (Valdepeñas), curso 2025/2026.

## 🌐 URL publicada

> **https://juancr21.github.io/portfolio-juan/**

## 🛠 Tecnologías usadas

- **HTML5** semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **CSS3** propio (sin frameworks): variables CSS, Flexbox, Grid, animaciones, media queries
- **JavaScript** vanilla: IntersectionObserver, localStorage, toggle de tema
- **Google Fonts**: Space Grotesk (cuerpo) + JetBrains Mono (código/monoespaciado)

## 🎨 Paleta de colores

| Rol | Color | Hex |
|-----|-------|-----|
| Fondo principal (dark) | Azul noche | `#0f172a` |
| Acento principal | Violeta | `#9333ea` |
| Acento claro | Lila | `#a78bfa` |
| Texto principal (dark) | Gris claro | `#e2e8f0` |
| Fondo principal (light) | Lavanda suave | `#f0f4ff` |
| Acento principal (light) | Violeta oscuro | `#7c3aed` |

**Por qué estos colores:** el morado/violeta transmite creatividad y modernidad tecnológica. El contraste entre el azul oscuro del fondo y el violeta brillante del acento crea una estética profesional y actual, muy usada en el sector tech. El modo claro usa el mismo acento pero sobre fondo lavanda para mantener coherencia sin resultar demasiado genérico.

## ✨ Elemento diferenciador: Toggle modo oscuro / claro

El portfolio incluye un botón (☀️/🌙) en la barra de navegación que permite cambiar entre modo oscuro y modo claro. Funciona mediante:

- Variables CSS (`:root` y `[data-theme="light"]`) que redefinen todos los colores de una vez
- JavaScript que alterna el atributo `data-theme` en el `<html>` y guarda la preferencia en `localStorage`
- Detección automática de la preferencia del sistema (`prefers-color-scheme`) al cargar la página por primera vez

Lo elegí porque es funcional, visualmente impactante, demuestra el uso de variables CSS avanzadas y JavaScript con `localStorage`, y es algo que el usuario nota inmediatamente al interactuar con la página.

## 🤖 Uso de IA

Usé **Claude** y **GitHub Copilot** durante el desarrollo:

- **Generación de estructura base**: pedí una estructura HTML semántica de portfolio y la adapté con mis datos reales
- **CSS del toggle de tema**: la IA me propuso el sistema de variables CSS con `data-theme`; yo lo revisé, lo entendí y lo integré con el resto del estilo
- **Corrección de errores**: cuando las barras de habilidades no animaban correctamente, pregunté a la IA por qué y me explicó el problema con `IntersectionObserver`
- **Textos del "Sobre mí"**: la IA generó un borrador que reescribí completamente con mi voz y datos reales

El código final lo entiendo en su totalidad y soy capaz de explicar cualquier parte.

## 🧩 Dificultades encontradas

- **Barras de progreso**: al principio las barras se animaban solo la primera vez porque el observer las dejaba en el ancho final. Solución: guardar el valor en `dataset.width` e inicializarlas a `0%` antes de observar.
- **Toggle de tema en el navbar**: el cambio de fondo al hacer scroll usaba colores hardcodeados; tuve que adaptar la función para que leyera el tema activo en cada momento.
- **Responsive con las skill cards**: fijar `width: calc(25% - 1.5rem)` rompía el layout en móvil; añadí un breakpoint en 900px para pasar a 2 columnas antes del mobile.

## 📁 Estructura de archivos

```
portfolio-juan-chicharro/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── img/
        └── foto-perfil.png
```
