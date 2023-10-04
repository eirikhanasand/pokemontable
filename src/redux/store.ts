import localStorage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import PokemonReducer from "./pokemon"
import thunk from "redux-thunk"

// Combines all reducers
const reducers = combineReducers({
    pokemon: PokemonReducer,
})

  // Function to localstore redux state
const saveState = {
    // Key property: root
    key: "root",
    // Sets localstorage as the type of storage to use
    storage: localStorage,
    // Whitelists the names of the states to save
    whitelist: ["pokemon"]
}

// Persistor to remember the state
const persistedReducer = persistReducer(saveState, reducers)

// Function to configure the store
const Store = configureStore({
    // The combinded reducer
    reducer: persistedReducer,
    // Middleware to interact with AsyncStorage
    middleware: [thunk]
})

// Exporting the full Redux Store
export default Store
