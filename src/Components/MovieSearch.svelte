<script>
    let search = '';
     
    const handleSubmit =  async ()  => {
        var apiUrl = `http://www.omdbapi.com/?t=${search}&apikey=311042d1`;
        console.log(apiUrl);
        var res = await fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
<input type="text"  placeholder="søk" bind:value={search}> 
    <button>Søk</button>
</form>
<style>
</style>
