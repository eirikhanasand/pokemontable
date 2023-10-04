import PokemonHeader from "./pokemonHeader"
import "../styles/pokemon.css"
import { useDispatch, useSelector } from "react-redux"
import fetchPokemonPage from "../utils/fetchPokemon"
import { setPokemonList } from "../redux/pokemon"
import { useEffect } from "react"
import extractImportantData from "../utils/extractImportantData"
import Loading from "./loading"

type GeneralInfoProps = {
    pokemon: Pokemon
}

export default function Pokemon(): JSX.Element {
    const { pokemon, pokemonList, count } = useSelector((state: ReduxState) => state.pokemon)
    const dispatch = useDispatch()
    
    const item = pokemonList[pokemon]

    useEffect(() => {
        // Fetches the next side 20 pokemon before you reach it
        if (!pokemonList[pokemon+20]) {
            async function fetchData() {
                // Calculates the next page and fetches it ahead of time
                const response = await fetchPokemonPage(count, Math.ceil((pokemon + 20) / 50 + 1))
                // Checks if response is valid and if so updates array
                if (Array.isArray(response)) {
                    const importantData = extractImportantData(response)
                    dispatch(setPokemonList([...pokemonList, ...importantData]))
                }
            }
    
            fetchData()
    
        }
    }, [item])

    if (!item) return <Loading />

    return (
        <div className="wrapper">
            <div className="pokemon_background">
            <PokemonHeader />
            {/* <div className="line" /> */}
            <div className="table_content">
                <img className="pokemon_image" 
                    src={item.image} 
                    alt={item.name}
                />
                <GeneralInfo pokemon={item} />
        </div>
        </div>
        </div>
    )
}

function GeneralInfo({pokemon}: GeneralInfoProps): JSX.Element {
    return (
        <div className="general_info">
            <p className="general_name">{pokemon.name} · {pokemon.id}</p>
            <div>
                <p className="pokemon_item">Generation: {pokemon.generation}</p>
                <p className="pokemon_item">Region name: {pokemon.region}</p>
                {/* <p className="pokemon_item">{pokemon.weight}</p>
                <p className="pokemon_item">{pokemon.height}</p>
                <p className="pokemon_item">HP: {pokemon.hp}</p>
                <p className="pokemon_item">Attack: {pokemon.attack}</p>
                <p className="pokemon_item">Defense: {pokemon.defense}</p>
                <p className="pokemon_item">Special attack: {pokemon.special_attack}</p>
                <p className="pokemon_item">Special defense: {pokemon.special_defense}</p>
                <p className="pokemon_item">Speed: {pokemon.speed}</p>
                <p className="pokemon_item">Species: {pokemon.species}</p> */}
            </div>
            {/* <p className="pokemon_item">
                {pokemon.types.map((type) => type + "\n")} 
            </p> */}
        </div>
    )
}


// It should be possible for a user to obtain detailed stats(hp, defence, attack etc) about each pokemon in the table by selecting it. 
// The detailed information about the selected pokemon should be displayed in a suitable manner. 
// The selected pokemon in the table should be highlighted.