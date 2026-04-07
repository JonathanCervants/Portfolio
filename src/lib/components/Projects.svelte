<script lang="ts">
    import {proyectos} from '$lib/data/portfolioData'
    // let count = $state(0)
</script>
<section id="proyectos">
    <div>
        <div class="flex">
            <a href="https://youtube.com/.." target="_blank" class="hidden md:inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition">
                ▶ Ver Canal de YouTube
            </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each proyectos as proyecto (proyecto.id)}
                <div class="border border-gray-200 rounded-xl p-6 hover:shadow-lg">
                    <div class="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                        {proyecto.tipo}
                    </div>120
                    <h3 class="text-xl font-bold text-gray-900 mb-3">
                        {proyecto.titulo}
                    </h3>
                    <p class="text-gray-600 mb-6 flex-grow text-sm">
                        {proyecto.descripcion}
                    </p>
                    <div class="flex flex-wrap gap-2 mb-6">
                        {#each proyecto.etiquetas as etiqueta (etiqueta)}
                             <span class="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded font-medium">
                               {etiqueta}
                            </span>             
                        {/each}
                    </div>
                    <a href={proyecto.link} class="mt-auto inline-flex itemscenter text-blue-600">
                        Ver detalles &rarr;
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>

