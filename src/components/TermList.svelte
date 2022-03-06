<script>
    import { apiData } from '../stores';
    import { fade, scale } from 'svelte/transition'
    import TermItem from './TermItem.svelte'

    export let filter;
    
    const terms = document.getElementsByClassName('terms-container');
    console.log(terms.length);
</script>

<div class="terms-container">
    {#each $apiData as term}
        {#if filter === 'All'}
            <TermItem {term}/>
        {:else if term.name.startsWith(filter)}
            <div in:scale>
                <TermItem {term}/>
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