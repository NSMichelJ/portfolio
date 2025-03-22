---
layout: ../../layouts/MarkdownProjectLayout.astro
title: 'Nomicalc: Sistema de gestión de nómina'
description: 'Nomicalc es una aplicación web de gestión de nómina desarrollada para la Alcaldía del Municipio Montes, Sucre, Venezuela. Facilita la administración de datos de trabajadores, departamentos y cargos, automatiza el procesamiento de pagos, gestiona retenciones, bonificaciones institucionales, y permite exportar reportes en PDF y Excel.'
image:
    url: '/img/projects/project-4/1.webp'
    alt: 'Sistema de gestión de nómina'
technologies: ["Python", "Django", "Django REST framework", "Javascript", "Bootstrap 5"]
urls:
    repo: ''
    demo: ''
---

# Sistema de gestión de nómina

Nomicalc es una aplicación web de gestión de nómina desarrollada para la Alcaldía del Municipio Montes, Sucre, Venezuela. Facilita la administración de datos de trabajadores, departamentos y cargos, automatiza el procesamiento de pagos, gestiona retenciones (como manutención por alimentación) y bonificaciones institucionales (horas extras, nocturnas, becas, vacaciones, discapacidad, etc.), y permite exportar reportes en PDF y Excel. Construida con Django y Django REST Framework, garantiza operaciones seguras, escalables y eficientes.

![ Sistema de gestión de nómina](/img/projects/project-4/2.webp)

## Alcance de la aplicación

* Gestión de Datos: Operaciones CRUD para registros de trabajadores, departamentos, cargos y fechas de pagos.
* Procesamiento de Nómina: Cálculos automáticos de salarios, deducciones y asignaciones.
* Beneficios Institucionales: Administración de becas, vacaciones, discapacidad y otros beneficios.
* Cumplimiento y Reportes: Generación de reportes legales y personalizados en múltiples formatos.
* Seguridad y Roles: Autenticación de usuarios y control de permisos para datos críticos.

## Tecnologías
* Frontend:
  * Renderizado de plantillas HTML con Django.
  * Bootstrap 5 para diseño responsivo y estilos.
  * JavaScript para funcionalidades interactivas (ej. validaciones, filtros dinámicos).
* Backend: Django (Python) para lógica de negocio y gestión de base de datos.
* API: Django REST Framework (DRF) para endpoints escalables y desacoplados.
* Base de Datos : PostgreSQL para almacenamiento seguro y eficiente.
* Generación de Reportes:
  * PDF: fpdf2.
  * Excel: OpenPyXL.
Control de Versiones: Git + GitHub para gestión de código y colaboración.

## Conocimientos técnicos

Lideré el desarrollo de Nomicalc, asumiendo responsabilidad en funciones críticas como el diseño de la arquitectura backend, la integración de la API con Django REST Framework y la implementación de seguridad (control de roles y autenticación). gestionando el control de versiones con Git y GitHub para resolver conflictos y mantener un flujo colaborativo eficiente. Traduje conocimientos teóricos en soluciones prácticas, como el diseño de modelos en Django ORM, optimización de consultas para reportes masivos y cálculos complejos de nómina (horas extras, retenciones, bonificaciones), mientras implementaba seguridad y control de roles.