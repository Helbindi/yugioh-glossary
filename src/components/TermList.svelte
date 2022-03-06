<script>
    import { apiData } from '../stores';
    import { fade, scale } from 'svelte/transition'
    import Term from './Term.svelte'

    export let filter;
    
    const terms = document.getElementsByClassName('terms-container');
    console.log(terms.length);
</script>

<div class="terms-container">
    {#each $apiData as term}
        {#if filter === 'All'}
            <Term {term}/>
        {:else if term.name.startsWith(filter)}
            <div in:scale>
                <Term {term}/>
            </div>
        {/if}
    {/each}
</div>

<style>
    .terms-container {
        margin: 0 1em;
        padding-bottom: 4em;
    }
</style>