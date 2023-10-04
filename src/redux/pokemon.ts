import { createSlice } from "@reduxjs/toolkit"

// Declares Pokemon Slice
export const PokemonSlice = createSlice({
    // Slice name
    name: "pokemon",
    // Initial state
    initialState: {
        // All pokemons fetched from API
        pokemonList: [] as Pokemon[],
        // Pokemon clicked
        pokemon: -1,
        // Attributes hidden by user (image, height, weight, etc.)
        hidden: [] as string[],
        // Amount of pokemon per page
        count: 50,
        // Page the user has reached
    },
    // Declares slice reducer
    reducers: {
        // Adds pokemon to the pokemon list
        setPokemonList: (state, action) => {
            state.pokemonList = action.payload
        },
        // Sets a specific pokemon to be displayed
        setPokemon: (state, action) => {
            console.log(action.payload)
            state.pokemon = action.payload
        },
        // Hides attributes from the table
        setHide: (state, action) => {
            state.hidden = state.hidden.filter(attribute => attribute !== action.payload)
        },
        // Adds back hidden attributes to the table
        setShow: (state, action) => {
            state.hidden.push(action.payload)
        },
        // Changes how many pokemon should be displayed per page
        setCount: (state, action) => {
            state.count = action.payload
        }
    }
})

// Exports redurcers
export const { setPokemon, setPokemonList, setHide, setShow } = PokemonSlice.actions

// Exports the profile slice
export default PokemonSlice.reducer
