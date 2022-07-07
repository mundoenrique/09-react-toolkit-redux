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
      state.isLoading = false;
      state.page = payload.page;
      state.pokemons = payload.pokemons;
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
