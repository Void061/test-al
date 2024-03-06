"use server";

const API_URL =  `https://pokeapi.co/api/v2/pokemon/`;
export const getPokemons = async(offset: number, limit: number) => {
    const response = await fetch(`${API_URL}?offset=${offset}&limit=${limit}`);
    const pokemon = await response.json();

    return pokemon.results;
}