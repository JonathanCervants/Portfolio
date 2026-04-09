<script lang="ts">
	import SocialLinks from "./SocialLinks.svelte";
  import urlImage from '$lib/assets/clara-fondo-facebo.png?enhanced';
  const relocationDate = "Marca la K y Escribe el 1 este 12 de Abril del 2026 para Diputada por Moquegua";
</script>
<section id="about">

  <div class="max-w-4xl mx-auto">
    <div class="w-auto h-auto bg-slate-300 rounded-2xlll mb-4 shadow-inner overflow-hidden border-2 border-white">
          
        <enhanced:img src={urlImage} alt="Clarita Diputada"
          class="w-full object-cover"/>
    </div>
    <div class="bg-amber-500 text-white rounded-2xl m-3 p-2">
      <h1 class="">Bienvenidos</h1>
      <h2 class="text-3xl font-bold text-white-900 mb-1">Sobre Mí</h2>
    </div>    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-5">
      <div class="space-y-4 px-5 text-gray-700 text-lg leading-relaxed">
        <p>
          Ileña de Nacimiento familia de pescadores <strong>Abogada</strong>  con dos hijos, <strong>fui parte del Comité de Vaso de Leche desempeñando el cargo de Coordinadora Provincial</strong>, así mismo presidí anteriormente el Club de Madres el Milagro, fui secretaria de actas del Consejo Comunal de Desarrollo de la Pampa Inalámbrica.
           Soy una mujer cristiana que solo desea servir por el bienestar de la población y desarrollo de nuestra región
        </p>
        <p>
          Con experiencia en Gestión Pública y Participación Ciudadana, con sólida experiencia en Entidades Públicas.
        </p>
        <p>
          Vengo postulando para la Cámara de Diputados por el partido de Fuerza Popular por número 1 por la región Moquegua con la firmeza 
          de sacar adelante leyes que beneficien a la población del lugar y se optimicen proyectos como el Megapuerto en la Provincia de Ilo y otros de prioridad.
          <strong>Por el fortalecimiento de la Seguridad Ciudadana, por un mayor empleo para los jóvenes</strong>, por la mejora de la Infraestructura Hídrica,
          Por el desarrollo de la mujer, y por una correcta Fiscalización en el uso de los recursos públicos,
          Asumo este rol el cual espero desempeñar con humildad, honestidad y transparencia.
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
        <a href="#propuestas" class="w-70% mt-3 px-6 py-3 md:inline-flex rounded-full items-center bg-red-600 text-white font-bold hover:text-red-700 transition">
                Propuestas
        </a>
        <SocialLinks />
      </div>
    </div>
  </div>
</section>

