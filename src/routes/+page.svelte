<script>
    import Button from '$lib/components/Button.svelte';
    import store from '$lib/store/store.svelte';
    import Test from './test.svelte';
    import About from '$lib/components/About.svelte'
	import Services from '$lib/components/Services.svelte';
	import Projects from '$lib/components/Projects.svelte';
    const changeN = ()=>{
         store.name = 'alanxxx'
    };
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="bg-black text-white">
    name: {store.name}
</div>

<Button onClick={changeN} aria="ssss">change N</Button>


<About />
<Services />
<Projects />