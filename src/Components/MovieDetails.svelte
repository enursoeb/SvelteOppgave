<script>
  import Card from "../Shared/Card.svelte";
  import MovieStore from "../Stores/MovieStore";
  import Button from "../Shared/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import Modal from "../Shared/Modal.svelte";
  import AddRackForm from "./AddRackForm.svelte";
  import {get} from 'svelte/store';

  export let movie;
  export let isSearch;
  export let disableButton = false;
  let showModal = false;
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
          return [movie, ...currentMovies];
        });
  };

  const removeSearch = (id) => {
    dispatch("removeFromSearch", movie);
  };

  // Open/close modal
const toggleModal = () => {
  showModal = !showModal
};

const addRack = (e) => {
  movie.Rack = e.detail;
  showModal = false;

  if(isSearch) {
    addToCollection(movie);
  }
}
</script>

<div class="movie-results">
<Card>
  Tittel: {movie.Title} <br />
  År: {movie.Year} <br />
  Sjanger: {movie.Genre} <br>
  Hylle: {movie.Rack}  <br>
  <div> <img class="image" src={movie.Poster} alt="{movie.Tittel}"/></div>
   
    <div class="delete">
      {#if !isSearch}
      <Button flat={true} on:click={ () => handleDelete(movie.Id)}>Slett</Button> 
      <Modal {showModal} on:click={toggleModal}>
        <AddRackForm on:addRack={addRack}/>
      </Modal>   
      <Button flat={true} type="secondary" on:click={toggleModal}>Endre hylle</Button>
      {/if}
      {#if isSearch && disableButton === false}
      <Modal {showModal} on:click={toggleModal}>
      <AddRackForm on:addRack={addRack}/>
    </Modal>   
      <Button flat={true} type="secondary" on:click={toggleModal}>Flytt til samling</Button> 
      {/if}
      {#if isSearch}
      <Button flat={true} on:click={removeSearch}>Fjern fra søk</Button> 
      {/if}
    </div>
</Card>
</div>

<style>
.image {
 margin-top: 12px;
 max-width: 480px;
 max-height: 240px;
}
    .movie-results {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
        column-gap: 10px;
        row-gap: 15px;
    }
</style>

