<script>
    import { suggestionData, addSuggestion } from '../stores'
    import Card from '../components/Card.svelte'
    import Button from './Button.svelte'

    let name = '';
    let type = '';
    let description = '';
    let btnDisabled = false;


    const handleSubmit = () => {
        const suggestion = {
            name,
            type,
            description
        }

        addSuggestion(suggestion);

        name = '';
        type = '';
        description = '';
        }
</script>

<Card>
    <header>
        <h1>Missing some terms? Suggest some to us!</h1>
    </header>

    <form on:submit|preventDefault="{handleSubmit}">
        <div class="input-group">
            <label for="name">Term Name</label>
            <input type="text" bind:value={name} placeholder="Name of the term" required>

            <label for="type">Term Type</label>
            <input type="text" bind:value={type} placeholder="Card, Ruling, etc..." required>

            <label for="description">Term Description</label>
            <textarea type='text' bind:value={description} placeholder="Term definition or example..." required></textarea >
        
            <Button type="submit" disabled={btnDisabled}>Send</Button>
        </div>
    </form>
</Card>

<style>
    header{
        margin: auto;
    }

    header h1 {
        font-weight: 600;
        text-align: center;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        border: 1px solid #ccc;
        border-radius: 0.5em;
        padding: 1em;
        margin-top: 1em;
    }

    label {
        padding-inline-start: 1ch;
        font-weight: 700;
    }

    input {
        flex-grow: 2;
        border: none;
    }

    input:focus {
        outline: none;
    }

    textarea {
        min-height: 150px;
    }

    textarea:focus {
        outline: none;
    }
</style>