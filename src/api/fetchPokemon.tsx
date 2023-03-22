import { PokemonDetails } from "../types/types";
import { formatPokemonName } from "../utils/utils";

export async function fetchPokemon(pokemonname: string): Promise<PokemonDetails> {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${formatPokemonName(pokemonname)}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch pokemons");
    };
    const result = await response.json();

    const pokemon = {
        name: result.name,
        id: result.id,
        imgSrc: result.sprites.front_default,
        hp: result.stats[0]?.base_stat,
        attack: result.stats[1]?.base_stat,
        defense: result.stats[2]?.base_stat,
        speed: result.stats[5]?.base_stat,
      };
      return pokemon;
};