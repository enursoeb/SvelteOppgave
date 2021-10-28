<script>
  import Card from "../Shared/Card.svelte";
  import MovieStore from "../Stores/MovieStore";
  import SearchStore from "../Stores/SearchStore";
  import Button from "../Shared/Button.svelte";

  export let movie;
  export let isSearch;

  // Deleting movie
  const handleDelete = (id) => {
    MovieStore.update((currentMovies) => {
      return currentMovies.filter((cm) => cm.Id != id);
    });
  };

  // Move to collection
  const addToCollection = (id) => {
        MovieStore.update(currentMovies => {
          return [movie, ...currentMovies];
        });
          SearchStore.update(currentMovies => {
      return currentMovies.filter((cm) => cm.Id != id);
        });
  };
</script>

<Card>
  Tittel: {movie.Title} <br />
  År: {movie.Year} <br />
  Sjanger: {movie.Genre}
  <div>
    <img class="image" src={movie.Poster} alt="{movie.Tittel}"/>
    <div class="delete">
      {#if !isSearch}
      <Button flat={true} on:click={ () => handleDelete(movie.id)}>Slett</Button> 
      {/if}
      {#if isSearch}
      <Button flat={true} type="secondary" on:click={ () => addToCollection(movie.id)}>Flytt til samling</Button> 
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
