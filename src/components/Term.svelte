<script>
    import Card from './Card.svelte'
    export let term
</script>

<Card>
    <div class="term-title">
        <h2>{term.name}</h2>
        <h3>{term.type}</h3>
    </div>
    <p class="term-description">{term.description}</p>
</Card>

<style>
    .term-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>