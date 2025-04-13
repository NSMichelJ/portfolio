---
layout: ../../layouts/MarkdownProjectLayout.astro
title: "ChromaticUI: Genera paletas de colores únicas y armoniosas"
description: "ChromaticUI es una herramienta intuitiva para diseñadores y desarrolladores que genera paletas de colores con tonalidades claras/oscuras, extrae colores de imágenes y ofrece ajustes precisos de tono, saturación y brillo, exporta en diferentes formatos. Incluye sugerencias de variantes basadas en teoría del color, herramientas de mezcla, conversión entre formatos, y analizador de contraste."
image:
  url: "/img/projects/project-5/1.webp"
  alt: "ChromaticUI"
technologies:
  ["Javascript", "Astro.js", "React.js", "Tailwind", "Shadcn/ui", "pnpm", "Git"]
urls:
  repo: "https://github.com/NSMichelJ/ChromaticUI"
  demo: "https://chromaticui.vercel.app/"
order: 80
---

# ChromaticUI

ChromaticUI es una aplicación web diseñada para optimizar la selección y manipulación de colores en proyectos creativos. Permite generar paletas automáticas con modos claro/oscuro, extraer colores desde imágenes subidas, y ajustar parámetros de cada tono con controles de tono, saturación y brillo. Exporta la paleta colores en diferentes formatos como Tailwind 3/4, CSS, SCSS y ofrece sugerencias inteligentes de colores armónicos (análogos, complementarios, triádicos, etc.), además de herramientas para mezclar colores y previsualizar combinaciones. Incluye un conversor entre formatos HEX, RGB, HSL, OKCLH, y funciones para evaluar el contraste.

![ ChromaticUI](/img/projects/project-5/2.webp)

## Características Principales:

* Generación de Paletas: Crea paletas con tonalidades claras y oscuras automáticas, ideales para temas light/dark mode.
* Extracción de Colores: Analiza imágenes para extraer paletas dominantes.
* Ajuste Avanzado: Modifica brillo, saturación y matiz de cada color con controles interactivos en tiempo real.
* Exportación Multiformato:
  * Soporte para Tailwind 3/4, CSS y SCSS.
  * Exporta a HEX, RGB, HSL y OKLCH.
* Teoría del Color: Sugiere variantes complementarias, análogas, triadas, tetrádicas, cuadradas y complementarias divididas, basadas en el color principal.
* Herramientas Profesionales:
  * Mezclador de colores con diferentes modos.
  * Conversor entre formatos (HEX, RGB, HSL, OKLCH).
  * Analizador de contraste para mejorar la accesibilidad.
* Personalización: Guarda paletas en local storage.

## Tecnologías

* Frontend: React (componentes interactivos) + Astro (rendimiento).
* UI: Tailwind CSS (estilos) y Shadcn (componentes accesibles y modernos).
* Despliegue: Git (control de versiones) y Vercel (hosting).
