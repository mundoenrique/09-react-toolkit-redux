import { createSlice } from '@reduxjs/toolkit';

export const pokemonInit = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: pokemonInit,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, { payload }) => {
      state.pokemons = payload;
      state.isLoading = false;
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
