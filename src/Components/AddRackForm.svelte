<script>
    import {createEventDispatcher} from 'svelte'

    let dispatch = createEventDispatcher();

    let rack;

    const handleSubmit = () => {
        dispatch('addRack', rack)
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
<input type="text" placeholder="hylle" bind:value={rack}>
<button>Legg til hylle</button>
</form>