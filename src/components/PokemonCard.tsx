"use client";

import { getPokemons } from "@/app/action";
import { useEffect, useState } from "react";
const PokemonCard = () => {

    const [pokemons, setPokemons] = useState([]);

    const findPokemons = async() => {
        const _pokemons = await getPokemons(20,20);
        setPokemons(_pokemons);
    }
    useEffect(() => {
        findPokemons();
    },[])


    return(
        <div>
            {pokemons.map((pokemon, index) => {
                const { name } = pokemon;
                return <h3 key={index}>{name}</h3>
            })}
        </div>
    )
}

export default PokemonCard;