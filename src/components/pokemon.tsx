import PokemonHeader from "./pokemonHeader"
import "../styles/pokemon.css"
import { useDispatch, useSelector } from "react-redux"
import fetchPokemonPage from "../utils/fetchPokemon"
import { setPokemonList } from "../redux/pokemon"
import { useEffect } from "react"
import extractImportantData from "../utils/extractImportantData"
import Loading from "./loading"

type PokemonObject = {
    pokemon: Pokemon
}

type StatsObject = {
    title: string
    value: string | number
}

export default function Pokemon(): JSX.Element {
    const { pokemon, pokemonList, count } = useSelector((state: ReduxState) => state.pokemon)
    const dispatch = useDispatch()
    
    const item = pokemonList[pokemon]

    useEffect(() => {
        // Fetches the next side 20 pokemon before you reach it
        if (!pokemonList[pokemon + 20]) {
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
                <div className="title_view">
                    <div className="smaller_view">
                            <img className="pokemon_image" 
                                src={item.image} 
                                alt={item.name}
                            />
                            <GeneralInfo pokemon={item} />
                        <Species pokemon={item} />
                    </div>
                </div>
                <div className="title_view">
                    <Stats pokemon={item} />
                    <div className="blue"></div>
                </div>
        </div>
        </div>
    )
}

function GeneralInfo({pokemon}: PokemonObject): JSX.Element {
    return (
        <div className="general_info">
            <p className="general_name">{pokemon.name} · {pokemon.id}</p>
            <div>
                <p className="pokemon_item">{pokemon.generation} · {pokemon.region}</p>
            </div>
        </div>
    )
}

function Stats({pokemon}: PokemonObject): JSX.Element {
    return (
        <div className="stats">
            <div >
                <StatsObject title="Weight:" value={pokemon.weight} />
                <StatsObject title="Height:" value={pokemon.height} />
                <StatsObject title="HP:" value={pokemon.hp} />
                <StatsObject title="Attack:" value={pokemon.attack} />
            </div>
            <div >
                <StatsObject title="Defense:" value={pokemon.defense} />
                <StatsObject title="Special attack:" value={pokemon.special_attack} />
                <StatsObject title="Special defense:" value={pokemon.special_defense} />
                <StatsObject title="Speed:" value={pokemon.speed} />
            </div>
        </div>
    )
}

function StatsObject({title, value}: StatsObject): JSX.Element {
    return (
        <div className="stats_object">
            <p className="stats_object_item">{title}</p>
            <p className="pokemon_item">{value}</p>
        </div>
    )
}

function Species({pokemon}: PokemonObject): JSX.Element {

    return (
        <div className="species">
            <StatsObject title="Species:" value={pokemon.species} />
            <StatsObject title={pokemon.types.length > 1 ? "Types:" : "Type:"} value={pokemon.types.join(", ")} />
        </div>
    )
}
