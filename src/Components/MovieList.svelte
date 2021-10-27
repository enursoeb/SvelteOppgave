<script>
    import {flip} from 'svelte/animate';
    import {fade, slide, scale} from "svelte/transition";

    import MovieStore from "../Stores/MovieStore";
    import MovieDetails from "./MovieDetails.svelte";
    
</script>

<div class ="movie-list">
    {#each $MovieStore as movie (movie.Id)}
    <div in:fade out:scale|local animate:flip={ {duration: 500}}>
        <MovieDetails {movie}/>
    </div>
{/each}
</div>

<style>
    .movie-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>