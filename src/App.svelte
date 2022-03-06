<script>
	import { selectedFilter, pageFilter } from './stores'
	import { onDestroy } from 'svelte';
	import Navigation from './components/Navigation.svelte'
	import TermList from './components/TermList.svelte'
	import TermFilter from './components/TermFilter.svelte'
	import SuggestionForm from './components/SuggestionForm.svelte'
	import SuggestionList from './components/SuggestionList.svelte'

	let filter;
	let page;

	const unsubscribe = selectedFilter.subscribe(value => {
		filter = value;
	});
	const unsubscribePage = pageFilter.subscribe(value => {
		page = value;
	});

	onDestroy(unsubscribe);
	onDestroy(unsubscribePage);
</script>

<main>
	<Navigation />
	{#if page === 'Suggestions'}
		<SuggestionForm />
		<SuggestionList />
	{:else}
		<TermFilter />
		<TermList {filter}/>
	{/if}
</main>

<style>

</style>