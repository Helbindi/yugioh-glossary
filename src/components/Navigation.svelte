<script>
    import { pageFilter } from '../stores';

    let active;
    function handleClick(e) {
        e.preventDefault();

        active = e.target.innerHTML;
        pageFilter.set(active);
    }
</script>

<nav class="navigation">
    <h2>Yugioh Term Glossary</h2>
    <ul class="nav-list">
        <li class="nav-item" on:click="{handleClick}">Terms</li>
        <li class="nav-item" on:click="{handleClick}">Suggestions</li>
    </ul>
</nav>

<style>
    .navigation {
        background: #333;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 1em 2em;
        gap: 1em;
    }

    @media (min-width: 768px) {
        .navigation {
            flex-direction: row;
        }
    }

    .nav-list {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1em;
        list-style: none;
    }

    .nav-item{
        text-transform: uppercase;
        cursor: pointer;
        font-weight: 600;
    }
</style>