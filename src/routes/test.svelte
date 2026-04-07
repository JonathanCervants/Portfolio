<script>
    import About from '$lib/components/Projects.svelte'
    import Button from '$lib/components/Button.svelte';
    import store from '$lib/store/store.svelte';
   
</script>

<div class="bg-black text-white">
    <p>Store: {store.name}</p>
</div>