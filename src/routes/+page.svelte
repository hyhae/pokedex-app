<script lang="ts">
    import { pokemon } from "../stores/pokestore";
    import PokemonCard from "../components/pokecard.svelte";
    // export let pokemon;
    
    let searchTerm = "";
    let filteredPokemon: any[] = [];

    $:{
        if(searchTerm){
            filteredPokemon = $pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        else{
            filteredPokemon = [ ...$pokemon];
        }
    }
</script>

<svelte:head>
    <title>Pokedex</title>
</svelte:head>

<h1 class="py-4 text-4xl text-center my-8 uppercase">Svelte kit pokedex</h1>

<input type="text" class = "w-full rounded-md text-lg p-4 border-2 border-gray-200" placeholder = "Search Pokemon"  bind:value={searchTerm}>

<div class="grid py-4 gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as pokeman }
        <PokemonCard data={pokeman}></PokemonCard>
    {/each}
</div>