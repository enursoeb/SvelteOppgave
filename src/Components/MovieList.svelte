<script>
    import {flip} from 'svelte/animate';
    import {fade, slide, scale} from "svelte/transition";

    import MovieStore from "../Stores/MovieStore";
    import MovieDetails from "./MovieDetails.svelte";
    let isSearch = false;
</script>

<div class ="movie-list">
    {#each $MovieStore as movie (movie.Id)}
    <div in:fade out:scale|local animate:flip={ {duration: 500}}>
        <MovieDetails {movie} {isSearch}/>
    </div>
{/each}
</div>

<style>
    .movie-list {
        grid-template-columns: 100px 50px 100px;
        grid-template-rows: 80px auto 80px;
        column-gap: 10px;
        row-gap: 15px;
    }
</style>