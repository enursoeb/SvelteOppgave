<script>
    import MovieDetails from "./MovieDetails.svelte";
    import { flip } from "svelte/animate";
    import { fade, slide, scale } from "svelte/transition";

    let search = "";
    let result;
    let isSearch = true;
    let movies = [];

    const handleSubmit = async () => {
        var apiUrl = `http://www.omdbapi.com/?t=${search}&apikey=311042d1`;
        var res = await fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if(data.Response == "True") {
                movies = [...movies, data];
                }
            });
    };

    const removeFromSearch = (e) => {
        movies = movies.filter((m) => m.imdbID != e.detail.imdbID);
    };
</script>

<!-- Search -->
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="søk" bind:value={search} />
    <button>Søk</button>
</form>

<!-- display search results -->
<div class="movie-list">
{#each movies as movie}
        <MovieDetails
            {movie}
            {isSearch}
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