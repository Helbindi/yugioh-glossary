<script>
    import { suggestionData } from '../stores'
    import { fade, scale } from 'svelte/transition'
    import SuggestionItem from './SuggestionItem.svelte'
</script>

<div class="suggestion-container">
    <h2>Current Suggestions</h2>
    {#each $suggestionData as suggestion}
        <SuggestionItem {suggestion} />
    {/each}
</div>

<style>
    .suggestion-container {
        margin: 0 1em;
        padding-bottom: 4em;
    }

    .suggestion-container h2 {
        margin-top: 2em;
        text-align: center;
        text-transform: uppercase;
    }
</style>