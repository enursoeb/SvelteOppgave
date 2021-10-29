<script>
    export let showModal = false;
    export let isPromo = false;
</script>

{#if showModal}
<div class="backdrop" class:promo={isPromo} on:click|self>
    <div class=modal> 
        <slot></slot>
        <!-- <slot name="title"></slot> -->
    </div>
</div>
{/if}

<style>
    .backdrop {
        width: auto;
        height: auto;
        position: fixed;
        background: white;
    }

    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: white;
    }

    .promo .modal {
        background: crimson;
        color: white;
    }
</style>