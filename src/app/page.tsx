import PokemonCard from "@/components/PokemonCard";
import { getPokemons } from "./action";
export default async function Home() {
  const pokemons : Pokemon[] = await getPokemons(0, 0);
  return (
    <div>
      <PokemonCard _pokemons={pokemons}/>
    </div>
  );
}