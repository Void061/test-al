import PokemonCardSSR from "@/components/PokemonCardSSR";
import PokemonCard from "@/components/PokemonCard";
export default async function Home() {

  return (
    <div>
      <PokemonCardSSR />
      <PokemonCard />
    </div>
  );
}