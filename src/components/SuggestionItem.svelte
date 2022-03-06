<script>
    import { likeSuggestion } from '../stores'
    import Card from './Card.svelte';

    export let suggestion
    let src = "thumb-up.png"

    function handleClick(e) {
        e.preventDefault()
        likeSuggestion(suggestion.id)
    }
</script>

<Card>
    <div class="likes-display" on:click|once="{handleClick}">
        <img {src} alt="likes" class="thumb-icon">
        <p>{suggestion.likes}</p>
    </div>
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

    .likes-display{
        position: absolute;
        top: -10px;
        left: -10px;
        width: 40px;
        height: 40px;
        padding: 5px;
        background: rgb(19, 172, 19);
        color: rgb(29, 29, 29);
        border: 1px #eee solid;
        border-radius: 50%;
        text-align: center;
        font-size: 1.2rem;
        text-align: center;
        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;

        font-weight: 500;
        cursor: pointer;
    }

    .likes-display:hover {
        transform: scale(1.1);
    }

    .thumb-icon {
        width: 20px;
        height: 20px;
    }
</style>