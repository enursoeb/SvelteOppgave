<script>
  import Card from "../Shared/Card.svelte";
  import MovieStore from "../Stores/MovieStore";
  import RackStore from "../Stores/RackStore";
  import Button from "../Shared/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import Modal from "../Shared/Modal.svelte";
  import AddRackForm from "./AddRackForm.svelte";
  import { Confirm } from "svelte-confirm";
  export let movie;
  export let isSearch;
  export let disableButton = false;
  let showModal = false;
  let dispatch = createEventDispatcher();

  // Remove movie from collection
  const deleteItem = (id) => {
    MovieStore.update((currentMovies) => {
      return currentMovies.filter((cm) => cm.Id != id);
    });
  };

  // Add movie to collection
  const addToCollection = (id) => {
    dispatch("removeFromSearch", movie);

    MovieStore.update((currentMovies) => {
      movie.Id = movie.imdbID;
      return [movie, ...currentMovies];
    });
  };

  // Remove movie from search results
  const removeSearch = (id) => {
    dispatch("removeFromSearch", movie);
  };

  // Open/close modal
  const toggleModal = () => {
    showModal = !showModal;
  };

  // Add rack for provided movie
  const addRack = (e) => {
    movie.Rack = e.detail.rackName;

    if (e.detail.isNew) {
      let newRack = {
        Id: movie.Id,
        Name: movie.Rack,
      };

      RackStore.update((currentRacks) => {
        return [newRack, ...currentRacks];
      });
    }

    showModal = false;

    if (isSearch) {
      addToCollection(movie);
    }
  };
</script>

<div class="movie-results">
  <Card>
    Tittel: {movie.Title} <br />
    År: {movie.Year} <br />
    Sjanger: {movie.Genre} <br />
    Hylle: {movie.Rack} <br />
    <div><img class="image" src={movie.Poster} alt={movie.Tittel} /></div>

    {#if !isSearch}
      {#if showModal}
        <Modal on:close={() => (showModal = false)}>
          <h2 slot="header">Endre hylle</h2>
          <AddRackForm on:addRack={addRack} />
        </Modal>
      {/if}
      <Button flat={true} type="secondary" on:click={toggleModal}
        >Endre hylle</Button
      >
      <Confirm
        confirmTitle="Slett film"
        cancelTitle="Avbryt"
        let:confirm={confirmThis}
      >
        <Button flat={true} on:click={() => confirmThis(deleteItem, movie.Id)}>
          Slett</Button
        >
        <span slot="title"> Vil du slette filmen? </span>
        <span slot="description">
          Filmen vil ikke være mulig å gjenoprrette!
        </span>
      </Confirm>
    {/if}
    {#if isSearch && disableButton === false}
      {#if showModal}
        <Modal on:close={() => (showModal = false)}>
          <h2 slot="header">Velg hylle</h2>
          <AddRackForm on:addRack={addRack} />
        </Modal>
      {/if}
      <Button flat={true} type="secondary" on:click={toggleModal}
        >Flytt til samling</Button
      >
    {/if}
    {#if isSearch}
      <Button flat={true} on:click={removeSearch}>Fjern fra søk</Button>
    {/if}
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
