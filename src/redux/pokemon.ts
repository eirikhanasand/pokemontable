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
        // Attributes hideable by user, all visible by defeault
        show: {
            image: true,
            weight: true,
            height: true,
            types: true
        },
        // Amount of pokemon per page, not changable per now
        count: 50,
    },
    // Declares slice reducer
    reducers: {
        // Adds pokemon to the pokemon list
        setPokemonList: (state, action) => {
            state.pokemonList = action.payload
        },
        // Sets a specific pokemon to be displayed
        setPokemon: (state, action) => {
            state.pokemon = action.payload
        },
        // Hides and shows attributes from the table
        setShow: (state, action) => {
            state.show = action.payload
        },
        // Changes how many pokemon should be displayed per page
        setCount: (state, action) => {
            state.count = action.payload
        }
    }
})

// Exports redurcers
export const { setPokemon, setPokemonList, setShow, setCount } = PokemonSlice.actions

// Exports the profile slice
export default PokemonSlice.reducer
