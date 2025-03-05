import { useState, useEffect } from "react";    //React hooks to manage state and fetch Pokemon data.
import axios from "axios";      //to fetch data from PokeAPI
import Link from "next/link";     //Navigation between pages.

//Structure of the Pokemon object.
interface Pokemon {
  name: string;
  url: string;
  id: number;
  image: string;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);  //Stores the list of Pokémon fetched from the API.
  const [search, setSearch] = useState("");  //Stores the text entered by the user in the search bar.

  //Fetching Pokemon data from PokiAPI.
  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
      const results = response.data.results.map((pokemon: any, index: number) => ({
        ...pokemon,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
      }));
      setPokemons(results);
    };

    fetchPokemons();
  }, []);

  //Filtering Pokemon based on Search input.
  const filteredPokemons = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="text-4xl font-extrabold text-center my-6 text-blue-500">Pokémon Explorer</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Pokémon..."
          className="w-full max-w-md px-4 py-2 border rounded-lg text-lg focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Pokemon Grid */}
      <div className="grid-layout">
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
              <div className="card cursor-pointer">
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="pokemon-image"
                />
                <h2 className="text-lg font-bold text-center capitalize">{pokemon.name}</h2>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No Pokémon found.</p>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        Made with ❤️ for You
      </footer>
    </div>
  );
}
