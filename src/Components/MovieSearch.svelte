
<script>
   import MovieDetails from "./MovieDetails.svelte";
   import {flip} from 'svelte/animate';
   import {fade, slide, scale} from "svelte/transition";

    let search = '';
    let result;
    let isSearch = true;
    let movies = [];
     
    const handleSubmit =  async ()  => {
        var apiUrl = `http://www.omdbapi.com/?t=${search}&apikey=311042d1`;
        var res = await fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
           movies = [...movies, data];
        });
              
    }

    const removeFromSearch = (e) => {
       movies = movies.filter((m) => m.Id != e.detail.Id);
  };

</script>

<!-- Search -->
<form on:submit|preventDefault={handleSubmit}>
<input type="text"  placeholder="søk" bind:value={search}> 
    <button>Søk</button>
</form>

<!-- display search results -->
{#each movies as movie  }
<div class ="movie-results">
        <MovieDetails {movie} {isSearch} on:removeFromSearch={removeFromSearch}/>
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
