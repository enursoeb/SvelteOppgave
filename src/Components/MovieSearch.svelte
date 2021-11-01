<script>
    import MovieDetails from "./MovieDetails.svelte";
    import { flip } from "svelte/animate";
    import { fade, slide, scale } from "svelte/transition";
    import MovieStore from "../Stores/MovieStore";
    import { get } from "svelte/store";

    let search = "";
    let isSearch = true;
    let searchResult = [];

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
                }
            });
    };

    // Remove provided movie from search result
    const removeFromSearch = (movieToBeRemoved) => {
        searchResult = searchResult.filter(
            (sr) => sr.imdbID != movieToBeRemoved.detail.imdbID
        );
    };

    let movieCollection = get(MovieStore);
</script>

<!-- Search -->
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="søk" bind:value={search} />
    <button>Søk</button>
</form>

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
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
        column-gap: 10px;
        align-content: space-around;
        row-gap: 15px;
    }
</style>
