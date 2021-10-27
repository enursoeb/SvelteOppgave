<script>
import Card from "../Shared/Card.svelte";
import MovieStore from "../Stores/MovieStore";
import Button from "../Shared/Button.svelte";

export let movie;

console.log("I MovieDetails");
console.log(movie);

// Deleting movie
const handleDelete = (id) => {
  MovieStore.update(currentMovies => {
    return currentMovies.filter(cm => cm.Id != id);
  })
}


</script>


<Card> Tittel: {movie.Title} <br>
       År: {movie.Year} <br>
       Sjanger: {movie.Genre}
         <div class="delete">
          <Button flat={true} on:click={ () => handleDelete(movie.Id)}>Fjern</Button>
         </div>

</Card>


<style>

</style>