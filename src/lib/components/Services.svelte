<script lang="ts">
    type Service = {
    id: number;
    title: string;
    description: string;
    icon: string; // Aquí podrías usar nombres de iconos de Lucide o FontAwesome
    stack: string[];
  };

  const services: Service[] = [
    {
      id: 1,
      title: "QA Automation & Liderazgo Técnico",
      description: "Diseño e implementación de estrategias de pruebas (QA Lead) y gestión de proyectos (PMO) para asegurar entregas de software robustas y sin errores.",
      icon: "🛡️", 
      stack: ["Automatización", "Documentación", "Gestión de Equipos"]
    },
    {
      id: 2,
      title: "Arquitectura Cloud & Backend",
      description: "Desarrollo de APIs escalables y automatización de flujos de trabajo empresariales para optimizar procesos y reducir tiempos operativos.",
      icon: "☁️",
      stack: ["Microsoft Azure", "NestJS / TypeScript", "n8n", "Power Apps"]
    },
    {
      id: 3,
      title: "Data Analytics & Machine Learning",
      description: "Construcción de modelos predictivos y análisis de datos complejos, aplicados a la toma de decisiones estratégicas y gestión medioambiental.",
      icon: "🧠",
      stack: ["Python", "Machine Learning", "Análisis de Datos"]
    }
  ];
</script>
<section id="proyectos">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900">Servicios y Especialidades</h2>
            <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
                Soluciones integrales que combinan la rigurosidad de la ingeniería de sistemas con el poder de los datos y la nube.       
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each services as service (service.id)}
                <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 group">
                    <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">
                        {service.icon}
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p class="text-gray-600 mb-6 line-clamp-3">
                        {service.description}
                    </p>
          
                    <div class="flex flex-wrap gap-2">
                        {#each service.stack as tech}
                        <span class="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                            {tech}
                        </span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
