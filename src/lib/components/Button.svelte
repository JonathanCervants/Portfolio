<script lang="ts">
    import type { Snippet } from "svelte";
    interface Props{
        children:Snippet;
        aria:string;
        onClick: ()=>void;
    }

    let { children, onClick, aria} : Props = $props()


</script>

<button aria-label={aria} class="border-1 bg-teal-50 p-4" onclick={onClick}>
    {@render children?.()}
</button>