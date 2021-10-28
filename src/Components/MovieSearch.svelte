
<script>
   import MovieDetails from "./MovieDetails.svelte";
   import SearchStore from "../Stores/SearchStore";
   import {flip} from 'svelte/animate';
   import {fade, slide, scale} from "svelte/transition";

    let search = '';
    let result;
    let isSearch = true;
     
    const handleSubmit =  async ()  => {
        var apiUrl = `http://www.omdbapi.com/?t=${search}&apikey=311042d1`;
        var res = await fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
              result = data; 
              searchStore = [...SearchStore, data]
        })
    };
</script>

<!-- Search -->
<form on:submit|preventDefault={handleSubmit}>
<input type="text"  placeholder="søk" bind:value={search}> 
    <button>Søk</button>
</form>

<!-- display search results -->
{#each SearchStore as movie  }
<div class ="movie-results">
        <MovieDetails {movie} {isSearch}/>
    </div>
    {/each}
   
<style>
    .movie-results {
        grid-template-columns: 100px 50px 100px;
        grid-template-rows: 80px auto 80px;
        column-gap: 10px;
        row-gap: 15px;
    }
</style>
