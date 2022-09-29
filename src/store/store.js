import { configureStore } from '@reduxjs/toolkit'; //Mi store
//Slices
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons:  pokemonSlice.reducer,
    },
})