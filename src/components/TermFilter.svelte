<script>
    import { selectedFilter } from '../stores';
    let active = '';

    function handleClick(e) {
        e.preventDefault();
        active = e.target.innerHTML;
        selectedFilter.set(active);
    }
</script>

<div class="filter-container">
    <button class={'filter-term ' + (active === 'A' ? 'selected' : '')} on:click="{handleClick}">A</button>
    <button class={'filter-term ' + (active === 'B' ? 'selected' : '')} on:click="{handleClick}">B</button>
    <button class={'filter-term ' + (active === 'C' ? 'selected' : '')} on:click="{handleClick}">C</button>
    <button class={'filter-term ' + (active === 'D' ? 'selected' : '')} on:click="{handleClick}">D</button>
    <button class={'filter-term ' + (active === 'E' ? 'selected' : '')} on:click="{handleClick}">E</button>
    <button class={'filter-term ' + (active === 'F' ? 'selected' : '')} on:click="{handleClick}">F</button>
    <button class={'filter-term ' + (active === 'G' ? 'selected' : '')} on:click="{handleClick}">G</button>
    <button class={'filter-term ' + (active === 'H' ? 'selected' : '')} on:click="{handleClick}">H</button>
    <button class={'filter-term ' + (active === 'I' ? 'selected' : '')} on:click="{handleClick}">I</button>
    <button class={'filter-term ' + (active === 'J' ? 'selected' : '')} on:click="{handleClick}">J</button>
    <button class={'filter-term ' + (active === 'K' ? 'selected' : '')} on:click="{handleClick}">K</button>
    <button class={'filter-term ' + (active === 'L' ? 'selected' : '')} on:click="{handleClick}">L</button>
    <button class={'filter-term ' + (active === 'M' ? 'selected' : '')} on:click="{handleClick}">M</button>
    <button class={'filter-term ' + (active === 'N' ? 'selected' : '')} on:click="{handleClick}">N</button>
    <button class={'filter-term ' + (active === 'O' ? 'selected' : '')} on:click="{handleClick}">O</button>
    <button class={'filter-term ' + (active === 'P' ? 'selected' : '')} on:click="{handleClick}">P</button>
    <button class={'filter-term ' + (active === 'Q' ? 'selected' : '')} on:click="{handleClick}">Q</button>
    <button class={'filter-term ' + (active === 'R' ? 'selected' : '')} on:click="{handleClick}">R</button>
    <button class={'filter-term ' + (active === 'S' ? 'selected' : '')} on:click="{handleClick}">S</button>
    <button class={'filter-term ' + (active === 'T' ? 'selected' : '')} on:click="{handleClick}">T</button>
    <button class={'filter-term ' + (active === 'U' ? 'selected' : '')} on:click="{handleClick}">U</button>
    <button class={'filter-term ' + (active === 'V' ? 'selected' : '')} on:click="{handleClick}">V</button>
    <button class={'filter-term ' + (active === 'W' ? 'selected' : '')} on:click="{handleClick}">W</button>
    <button class={'filter-term ' + (active === 'X' ? 'selected' : '')} on:click="{handleClick}">X</button>
    <button class={'filter-term ' + (active === 'Y' ? 'selected' : '')} on:click="{handleClick}">Y</button>
    <button class={'filter-term ' + (active === 'Z' ? 'selected' : '')} on:click="{handleClick}">Z</button>
    
    <button class={'filter-term ' + (active === 'All' ? 'selected' : '')} on:click="{handleClick}">All</button>
</div>

<style>
    .filter-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5em;
        align-items: center;
        justify-content: center;
        margin: 1em auto;
        max-width: 500px;
    }

    button {
        font-weight: 500;
    }

    @media (min-width: 768px) {
        .filter-container {
            max-width: none;
        }

        button {
            padding: 0.75em;
        }
    }

    .filter-term {
        cursor: pointer;
    }

    .selected {
        background: black;
        color: white;
    }
</style>