<script>
    import { flip } from "svelte/animate";
    import { fade, slide, scale } from "svelte/transition";
    import MovieStore from "../Stores/MovieStore";
    import RackStore from "../Stores/RackStore";
    import MovieDetails from "./MovieDetails.svelte";
    let isSearch = false;
    let rack = "Alle";
</script>

<div class="dropdown">
    <h4>Filtrer samling etter hylle</h4>
    <select bind:value={rack}>
        {#each $RackStore as rs}
            <option value={rs.Name}>{rs.Name}</option>
        {/each}
        <option value="Alle">Alle</option>
    </select>
</div>

<div class="movie-list">
    {#each $MovieStore as movie (movie.Id)}
        <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
            {#if movie.Rack === rack || rack === "Alle"}
                <MovieDetails {movie} {isSearch} disableButton="false" />
            {/if}
        </div>
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

    .dropdown {
        margin-top: 12px;
        margin-bottom: 12px;
    }
</style>
