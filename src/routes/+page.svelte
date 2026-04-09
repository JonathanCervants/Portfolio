<script>
    import Button from '$lib/components/Button.svelte';
    import store from '$lib/store/store.svelte';
    import About from '$lib/components/About.svelte'
	import Services from '$lib/components/Services.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Ejes from '$lib/components/Ejes.svelte';
    const changeN = ()=>{
         store.name = 'alanxxx'
    };
</script>
<!-- 
<Button onClick={changeN} aria="ssss">change N</Button>
 -->

<About />
<Ejes />
<Projects />
