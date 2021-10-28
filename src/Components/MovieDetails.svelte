<script>
  import Card from "../Shared/Card.svelte";
  import MovieStore from "../Stores/MovieStore";
  import Button from "../Shared/Button.svelte";

  export let movie;
  export let isSearch;

  console.log("I MovieDetails");
  console.log(movie);

  // Deleting movie
  const handleDelete = (id) => {
    MovieStore.update((currentMovies) => {
      return currentMovies.filter((cm) => cm.Id != id);
    });
  };


  // Move to collection
  const addToCollection = (id) => {
        console.log("Move film to collection");
  };
</script>

<Card>
  Tittel: {movie.Title} <br />
  År: {movie.Year} <br />
  Sjanger: {movie.Genre}
  <div>
    <img src={movie.Poster} />
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
