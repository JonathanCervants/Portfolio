import type { Proyecto } from "$lib/Interfaces/portfolio";

export const proyectos : Proyecto[] = [
    {
        id: "ml-agua",
        titulo: "Sistema de Soporte de Decisiones (ML) - Calidad de Agua",
        descripcion: "Desarrollo de un modelo de Machine Learning para analizar y predecir parámetros de calidad de agua en la operación minera Quellaveco. Proyecto core de Maestría en Gestión Ambiental.",
        etiquetas: ["Python", "Machine Learning", "Data Analytics", "Gestión Ambiental"],
        link: "https://www.youtube.com/@ingenia.cervantes",
        tipo: "Destacado"
    },
    {
        id: "azure-onelake",
        titulo: "Arquitectura Cloud con Microsoft Azure & OneLake",
        descripcion: "Serie técnica y casos de uso empresariales sobre la implementación de OneLake y despliegues en Azure. Contenido principal de mi canal tecnológico.",
        etiquetas: ["Microsoft Azure", "OneLake", "Cloud Architecture", "Video"],
        link: "https://www.youtube.com/@ingenia.cervantes", // Link a tu canal
        tipo: "YouTube / Content"
     },
     {
        id: "qa-automation",
        titulo: "Framework de Automatización QA",
        descripcion: "Diseño e implementación de un marco de trabajo para asegurar la calidad de software en flujos de apuestas y transacciones, liderando el equipo de calidad.",
        etiquetas: ["QA Automation", "Testing", "PMO", "Gestión de Calidad"],
        link: "https://www.youtube.com/@ingenia.cervantes",
        tipo: "Ingeniería"
    }
]