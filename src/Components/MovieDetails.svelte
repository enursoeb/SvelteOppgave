<script>
  import Card from "../Shared/Card.svelte";
  import MovieStore from "../Stores/MovieStore";
  import Button from "../Shared/Button.svelte";
  import { createEventDispatcher } from "svelte";


  export let movie;
  export let isSearch;
  let dispatch = createEventDispatcher();

  // Deleting movie
  const handleDelete = (id) => {
    MovieStore.update((currentMovies) => {
      return currentMovies.filter( (cm) => cm.Id != id);
    });
  };

  // Move to collection
  const addToCollection = (id) => {
    
     dispatch("removeFromSearch", movie);

        MovieStore.update(currentMovies => {
          movie.Id = movie.imdbID;
          movie.Rack = "Uncategorized";
          return [movie, ...currentMovies];
        });
  };
</script>


<Card>
  Tittel: {movie.Title} <br />
  År: {movie.Year} <br />
  Sjanger: {movie.Genre} <br>
  Hylle: {movie.Rack} 
  <div>
    <img class="image" src={movie.Poster} alt="{movie.Tittel}"/>
    <div class="delete">
      {#if !isSearch}
      <Button flat={true} on:click={ () => handleDelete(movie.Id)}>Slett</Button> 
      {/if}
      {#if isSearch}
      <Button flat={true} type="secondary" on:click={ () => toggleModal()}>Flytt til samling</Button> 
      {/if}
    </div>
  </div>
</Card>



<style>
.image {
 margin-top: 12px;
 max-width: 480px;
 max-height: 240px;
}
</style>
