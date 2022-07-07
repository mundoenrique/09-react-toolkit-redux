import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../store/slices/pokemon';

export default function PokemonApp() {
  const disptach = useDispatch();
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemon);

  useEffect(() => {
    disptach(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {JSON.stringify(isLoading)}</span>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={() => disptach(getPokemons(page))}>
        Next Page
      </button>
    </>
  );
}
