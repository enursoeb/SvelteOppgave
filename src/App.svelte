<script>
	import Header from './Components/Header.svelte';
    import Footer from './Components/Footer.svelte';
    import Tabs from './Shared/Tabs.svelte';
	import MovieList from './Components/MovieList.svelte';
	import MovieSearch from './Components/MovieSearch.svelte';
	import Help from './Components/Help.svelte';

    // tabs
	let items = ['Filmoversikt', 'Finn filmer', 'Hjelp']
	let activeItem = 'Filmoversikt'

	const tabChange = (e) => {
		activeItem = e.detail;
	}
    
const handleAdd = (e) => {
	activeItem = 'Filmoversikt';
}

</script>

<main>
	<Header></Header>
	<Tabs {activeItem} {items} on:tabChange={tabChange}/>
	{#if activeItem === 'Filmoversikt'}
	<MovieList></MovieList>
	{:else if activeItem === 'Finn filmer'}
    <MovieSearch></MovieSearch>
	{:else if activeItem === 'Hjelp'}
     <Help></Help>
	{/if}
	<Footer></Footer>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<!-- TODO:
-  Endre utseende i grid for filmoversikt og finn filmer
- Finn filmer: Søk med forskjellige parametre
- Søkeside: sorter på tittel/kronologisk
- Bug - Undefined legges til vis man klikker lagre i modal hvis validering er feil
- [X]Filmoversikt: Filtrer filmer på "Hylle"
- [X]Finn filmer: Legg til "Hylle" (modal?) når film flyttes
- [X]Bugfix - Feil når man flytter flere filmer fra søk til oversikt
- [X] Hjelpeside -->