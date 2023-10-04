import PokemonTable from './components/pokemonTable'
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import { Provider } from "react-redux"
import Store from './redux/store'


let persistor = persistStore(Store)

export default function App() {
    return (
        <main>
            <Provider store={Store}>
                <PersistGate loading={null} persistor={persistor}>
                    <PokemonTable />
                </PersistGate>
            </Provider>
        </main>
    )
}
