<script>
    import { createEventDispatcher } from "svelte";
    import RackStore from "../Stores/RackStore";
    import Button from "../Shared/Button.svelte";

    import { get } from "svelte/store";
    let dispatch = createEventDispatcher();

    let rack = "";
    let rackSelect;
    let newValue = true;
    let existingValues = false;
    let validation = true;
    
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

        if (validation) dispatch("addRack", inputRack);

    };

    const toggleInputMethods = () => {
        newValue = !newValue;
        existingValues = !existingValues;
        validate();
    };

    const validate = () => {

        console.log("Rack", rack);
        console.log("ExistingValues", existingValues)
        console.log("Validating.....", existingValues || (rack != "navn på ny hylle" && rack != ""));

        if (existingValues || (rack != "navn på ny hylle" && rack != ""))
            validation = true;
        else validation = false;
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    Opprett ny hylle
    <input
        type="checkbox"
        class="checkbox"
        checked={newValue}
        on:click={toggleInputMethods}
    />
    Velg fra eksisterende hyller
    <input
        type="checkbox"
        checked={existingValues}
        on:click={toggleInputMethods}
    /> <br /> <br />

    {#if newValue}
        <input
            type="text"
            placeholder="navn på ny hylle"
            bind:value={rack}
            on:keyup={validate}
        />
        <br />
    {/if}

    {#if existingValues}
        <select bind:value={rackSelect}>
            {#each $RackStore as rs}
                <option value={rs.Name}>{rs.Name}</option>
            {/each}
            <option value="Alle">Alle</option>
        </select>
    {/if}
    <br />
    {#if !validation}
        <div class="warning">
            Navn må fylles ut hvis 'opprett ny hylle' er valgt!
        </div>
    {/if} <br />
    <Button flat={true} type="secondary" on:click={handleSubmit}
        >Lagre endringer</Button
    >
    <Button flat={true} on:click={dispatch("close")}>Avbryt</Button>
</form>

<style>
    .warning {
        color: red;
    }

    .checkbox {
        margin-left: 12px;
        margin-right: 12px;
    }
</style>
