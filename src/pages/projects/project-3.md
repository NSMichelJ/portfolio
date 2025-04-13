---
layout: ../../layouts/MarkdownProjectLayout.astro
title: 'bcv_exchange: Librería para recuperar los tipos de cambio del Bolívar venezolano'
description: 'Este proyecto consiste en el desarrollo de una librería Python que permite obtener la tasa de cambio oficial del bolívar venezolano frente a divisas internacionales (USD, EUR, CNY, TRY, RUB) publicadas por el Banco Central de Venezuela (BCV).'
image:
    url: '/img/projects/project-3/1.webp'
    alt: 'bcv_exchange'
technologies: ["Python", "PyPi"]
urls:
    repo: 'https://github.com/NSMichelJ/bcv_exchange'
    demo: ''
order: 10
---

# bcv_exchange: Libreria para recuperar los tipos de cambio del Bolívar venezolano

Este proyecto consiste en el desarrollo de una librería Python que permite obtener la tasa de cambio oficial del bolívar venezolano frente a divisas internacionales (USD, EUR, CNY, TRY, RUB) publicadas por el Banco Central de Venezuela (BCV). La librería realiza web scraping en el sitio web oficial del BCV, procesa los datos y devuelve resultados estructurados en formato JSON. Además, incluye pruebas unitarias automatizadas y está publicada en PyPI para su fácil instalación y uso.

![bcv_exchange](/img/projects/project-3/2.webp)

## Alcance de la aplicación

* Extracción de datos: Scraping de la página del BCV para obtener tasas de cambio actualizadas.

* Manejo de múltiples divisas: Soporte para USD, EUR, CNY, TRY y RUB.

* Estructura de datos clara: Retorna un diccionario con la fuente (URL del BCV), fecha de actualización (en formato ISO 8601) y tasas de cambio en valores numéricos.

* Manejo de errores: Detecta cambios en la estructura de la página web o fallos de conexión y lanza excepciones descriptivas.

## Tecnologías

- Lenguaje: Python
- Web Scraping: requests y BeautifulSoup.
- Pruebas: unittest.
- Empaquetado de Python: setuptools.
- Despliegue: twine.
- Control de Versiones: Git y GitHub.

## Conocimientos técnicos

- Web Scraping: Uso de requests y BeautifulSoup para extraer datos de páginas web. Manejo de HTML y selectores CSS para parsear contenido dinámico.
- Desarrollo de Librerías: Estructura de paquetes Python con setuptools. Publicación en PyPI para distribución global.
- Pruebas Automatizadas: Creación de pruebas unitarias con unittest.
- Manejo de Errores: Excepciones personalizadas para errores de conexión o estructura HTML inesperada.
