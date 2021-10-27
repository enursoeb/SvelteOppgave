
<script>
   import MovieDetails from "./MovieDetails.svelte";
   import {flip} from 'svelte/animate';
   import {fade, slide, scale} from "svelte/transition";

    let search = '';
    let movie;
     
    const handleSubmit =  async ()  => {
        var apiUrl = `http://www.omdbapi.com/?t=${search}&apikey=311042d1`;
        var res = await fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
              movie = data; 
        })
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
<input type="text"  placeholder="søk" bind:value={search}> 
    <button>Søk</button>
</form>


{#if movie != null}
<div class ="movie-results">
        <MovieDetails {movie}/>
    </div>
    {/if}

<style>
    .movie-results {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>
