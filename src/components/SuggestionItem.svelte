<script>
    import Card from './Card.svelte';
    export let suggestion
</script>

<Card>
    <div class="suggestion-title">
        <h2>{suggestion.name}</h2>
        <h3>{suggestion.type}</h3>
    </div>
    <p class="suggestion-description">{suggestion.description}</p>
</Card>

<style>
    .suggestion-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>