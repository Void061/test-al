"use client";

import { getPokemons } from "@/app/action";
import { useState } from "react";


interface PokemonCardProps {
    _pokemons : Pokemon[]
}

const PokemonCard : React.FC<PokemonCardProps>= ({_pokemons }) => {
    const [pokemons, setPokemons] = useState(_pokemons);

    const findMore = async () => {
        const pPokemons = await getPokemons(20, 20);
        setPokemons((prevPokemons : Pokemon[]) => [...prevPokemons, ...pPokemons]);
    }

    return(
        <div>
            {pokemons.map((pokemon : Pokemon, index : React.Key) => {
                const { name } = pokemon;
                return <h3 key={index}>{name}</h3>
            })}
            <button onClick={findMore}>getMore</button>
        </div>
    )
}

export default PokemonCard;