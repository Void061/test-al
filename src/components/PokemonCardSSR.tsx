import { getPokemons } from "@/app/action";

const PokemonCardSSR = async () => {
    const pokemons = await getPokemons(0, 0);
    return(<div>
      {pokemons.map((pokemon, index) => {
      const { name } = pokemon;
      return <h3 key={index}>{name}</h3>
    })}
  </div>)
}


export default PokemonCardSSR