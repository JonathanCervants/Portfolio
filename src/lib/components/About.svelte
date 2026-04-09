<script lang="ts">
	import SocialLinks from "./SocialLinks.svelte";
  import urlImage from '$lib/assets/clara-fondo-facebo.png?enhanced';
  const relocationDate = "Marca la K y Escribe el 1 este 12 de Abril del 2026";
</script>
<section id="about">

  <div class="max-w-4xl mx-auto">
    <div class="w-auto h-auto bg-slate-300 rounded-full mb-4 shadow-inner overflow-hidden border-2 border-white">
          
        <enhanced:img src={urlImage} alt="Clarita Diputada"
          class="w-full object-cover"/>
    </div>
    
    <div class="bg-amber-500 text-white rounded-2xl">
  
    <h1 class="pl-4">Bienvenidos</h1>
    <h2 class="pl-5 text-3xl font-bold text-white-900 mb-6">Sobre Mí</h2>
    </div>    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div class="space-y-4 px-5 text-gray-700 text-lg leading-relaxed">
        <p>
          Ileña de Nacimiento familia de pescadores <strong>Abogada</strong>  con dos hijos, familia de pescadores, fui parte del Comité de Vaso de Leche y Club de Madres. Comprometida con la voz y el futuro de nuestra gente.
        </p>
        <p>
          Experiencia en Gestión Pública, participación ciudadana y elaboración de proyectos, sólida experiencia en Entidades Públicas <strong>en el área Legal y Proyectos</strong>, enfocada en el cumplimiento normativo, trabajando de manera integra y honesta, con ética y veracidadsino que escalen de manera eficiente y cumplan con los más altos estándares empresariales.
        </p>
        <p>
          Lidero <strong> mi equipo de Campaña para Diputada con el número 1 por Moquegua</strong>, tengo firmeza en sacar adelante leyes en beneficio de la región de <strong>Moquegua</strong> y potenciar el desarollo.
        </p>
        <div class="mt-6 inline-block bg-blue-50 border border-blue-200 text-blue-800 px-4 py-2 rounded-lg font-medium">
          🌍 Nacida en Ilo, Familia Ileña seré la voz de del pueblo en el Congreso. {relocationDate}.
        </div>
      </div>

      <div class="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
        <div class="w-32 h-32 bg-slate-300 rounded-full mb-4 shadow-inner overflow-hidden border-2 border-white">
          <img 
            src="/clara.png" 
            alt="Clarita" 
            class="w-full h-full object-cover"
          />
        </div>
        <h3 class="font-bold text-xl text-gray-900">Clara Hipahuanca Tapia</h3>
        <p class="text-blue-600 font-medium">Abogada</p>
        <!-- <a href="#contacto" class="mt-6 bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
          Contactar
        </a> -->
        <a href="#propuestas" class="md:inline-flex rounded-full items-center bg-white-900 text-red-600 font-semibold hover:text-red-700 transition">
                Propuestas
            </a>
        <SocialLinks />
      </div>
    </div>
  </div>
</section>

