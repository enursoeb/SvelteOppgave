<script>
    import MovieDetails from "./MovieDetails.svelte";
    import { flip } from "svelte/animate";
    import { fade, slide, scale } from "svelte/transition";
    import MovieStore from "../Stores/MovieStore";
    import { get } from "svelte/store";

    let search = "";
    let isSearch = true;
    let searchResult = [];
    let sortMethod = "byname"

    // Get search result
    const handleSubmit = async () => {
        var apiUrl = `http://www.omdbapi.com/?t=${search}&apikey=311042d1`;
        var res = await fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.Response == "True") {
                    if (data.Poster == "N/A") {
                        data.Poster = "Images/NoImage.jpg";
                    }
                    searchResult = [...searchResult, data];
                    sortResults();
                }
            });
    };

    // Remove provided movie from search result
    const removeFromSearch = (movieToBeRemoved) => {
        searchResult = searchResult.filter(
            (sr) => sr.imdbID != movieToBeRemoved.detail.imdbID
        );
    };

    const sortResults = () => {
        if(sortMethod === 'byname') {
            searchResult = searchResult.sort((a,b) => (a.Title > b.Title) ? 1: -1);
        }

        if(sortMethod === 'byyear') {
            searchResult = searchResult.sort((a,b) => (a.Year > b.Year) ? 1: -1);
        }
    }

    let movieCollection = get(MovieStore);
</script>

<!-- Search -->
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="søk" bind:value={search} />
    <button>Søk</button>
</form>

<!-- Sort search results -->
{#if searchResult.length > 0} 
<div class="dropdown" on:change={sortResults}>
    <h4>Sorter resultater</h4>
    <select bind:value={sortMethod}>
            <option value="byname">Tittel</option>
            <option value="byyear">Kronologisk</option>
    </select>
</div>
{/if}

<!-- display search results -->
<div class="movie-list">
    {#each searchResult as movie}
        <MovieDetails
            {movie}
            {isSearch}
            disableButton={movieCollection.find(
                (mc) => mc.Id == movie.imdbID
            ) != undefined}
            on:removeFromSearch={removeFromSearch}
        />
    {/each}
</div>

<style>
    .movie-list {
        display: flex;
        place-items: center;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto auto auto auto;
        align-items: center;
        justify-content: center;
        column-gap: 5px;
        margin: auto;
        row-gap: 5px;
    }
</style>
