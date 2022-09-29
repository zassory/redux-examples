import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
       name: 'pokemon',
       initialState: {
            page:0,
            pokemons: [],
            isLoading: false
       },
       reducers: {
            startLoadingPokemons: (state) => {
                state.isLoading = true;
            },
            setPokemons: (state, action) => {
                state.isLoading = false;
                //Todo es con el segundo argumento
                state.pokemons = action.payload.pokemons;
                state.page = action.payload.page;
            }
       }
});
// Action creators are generated for each case reducer function
//Mis funciones creadoras de acciones
export const { startLoadingPokemons,setPokemons } = pokemonSlice.actions;