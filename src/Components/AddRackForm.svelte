<script>
    import { createEventDispatcher } from "svelte";
    import RackStore from "../Stores/RackStore";
    import { get } from "svelte/store";
    let dispatch = createEventDispatcher();

    let rack;
    let rackSelect;
    let newValue = true;
    let existingValues = false;
    let validation = false;

    const handleSubmit = () => {
        let inputRack = {
            rackName: rack,
            isNew: true,
        };

        if (!newValue) {
            inputRack.rackName = rackSelect;
            inputRack.isNew = false;
        }

        validate();

        if(validation)
        dispatch("addRack", inputRack);
    };

    const toggleInputMethods = () => {
        newValue = !newValue;
        existingValues = !existingValues;
        validate();
    };

    const validate = (rack) => {
        console.log("Validate", rack)

        if(existingValues || (rack != "navn på ny hylle" && rack != "")) validation = true;
        else validation = false;
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    Opprett ny hylle
    <input type="checkbox" checked={newValue} on:click={toggleInputMethods} />

    {#if newValue}
        <input type="text" placeholder="navn på ny hylle" bind:value={rack}  on:keypress={validate(rack)}/>
        <br />
    {/if}

    Velg fra eksisterende hyller
    <input
        type="checkbox"
        checked={existingValues}
        on:click={toggleInputMethods}
    />

    {#if existingValues}
        <select bind:value={rackSelect}>
            {#each $RackStore as rs}
                <option value={rs.Name}>{rs.Name}</option>
            {/each}
            <option value="Alle">Alle</option>
        </select>
    {/if}
    <br />
    <button>Lagre endringer</button>
    {#if !validation}
    <div class="warning"> Navn må fylles ut hvis 'opprett ny hylle' er valgt!</div>
    {/if}
</form>

<style>
    .warning {
        color: red;
    }
</style>
