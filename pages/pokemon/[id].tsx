import { GetStaticProps, GetStaticPaths } from "next";  //For Static Site Generation.
import axios from "axios";   //To fetch data from PokeApi

//Structure of Pokemon
interface PokemonDetails {
  id: number;
  name: string;
  sprites: { front_default: string };
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
  stats: { stat: { name: string }, base_stat: number }[];
  moves: { move: { name: string } }[];
}

//Functional Component that displays Pokemon details.
export default function PokemonDetail({ pokemon }: { pokemon: PokemonDetails }) {
  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-40 mx-auto my-4" />
      
      <div className="grid grid-cols-2 gap-4 text-left">
        <div>
          <h2 className="text-xl font-semibold">Abilities</h2>
          <ul>
            {pokemon.abilities.map((a, idx) => (
              <li key={idx} className="capitalize">{a.ability.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Types</h2>
          <ul>
            {pokemon.types.map((t, idx) => (
              <li key={idx} className="capitalize">{t.type.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4">Stats</h2>
      <ul>
        {pokemon.stats.map((s, idx) => (
          <li key={idx}>{s.stat.name}: {s.base_stat}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-4">Moves</h2>
      <div className="flex flex-wrap justify-center">
        {pokemon.moves.slice(0, 10).map((m, idx) => (
          <span key={idx} className="px-2 py-1 m-1 bg-gray-200 rounded">{m.move.name}</span>
        ))}
      </div>
    </div>
  );
}

//Generatin Static Path for Pokemon pages.
export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_POKEAPI_URL}/pokemon?limit=50`);
    const pokemons = response.data.results;
  
    const paths = pokemons.map((pokemon: { url: string }) => {
      // Extract ID from URL (e.g., "https://pokeapi.co/api/v2/pokemon/1/")
      const id = pokemon.url.split("/").slice(-2, -1)[0];
  
      return { params: { id } };
    });
  
    return { paths, fallback: false };
  };
  

 //Fetching pokemon data for each page. 
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_POKEAPI_URL}/pokemon/${params?.id}`);
  return { props: { pokemon: response.data } };
};
