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
      title: "Desarrollo Sostenible",
      description: "Impulsar leyes para proyectos como el Megapuerto que nos permitan ser ejes estrategicos de la región.",
      icon: "🛡️", 
      stack: ["Desarrollo", "Innovación", "Liderazgo"]
    },
    {
      id: 2,
      title: "Seguridad Ciudadana",
      description: "Leyes que nos permitan salvaguardar la vida de las personas, con firmeza e inteligencia.",
      icon: "☁️",
      stack: ["Acción", "Prevención", "Inteligencia", "Estrategia"]
    },
    {
      id: 3,
      title: "Salud y Seguros para mejorar la calidad de Vida",
      description: "Leyes para los más necesitados para que tenga una mejor calidad de vida.",
      icon: "🧠",
      stack: ["Seguro", "Protección", "Bienestar"]
    }
  ];
</script>
<section id="proyecto">
    <div class="max-w-6xl mx-14 mt-14">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900">Ejes Estratégicos</h2>
            <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
                Trabajaremos con profesionalismo aportando leyes de los aspectos más críticos e importantes para la población.       
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
                        {#each service.stack as tech (tech)}
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
