import "../styles/pokemonTable.css"
import extractImportantData from "../utils/extractImportantData"
import fetchAllPokemon from "../utils/fetchPokemon"
import Loading from "./loading"
import PokemonTableHeader from "./pokemonTableHeader"
import Pokemon from "./pokemon"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setPokemon, setPokemonList } from "../redux/pokemon"

type PokemonList = {
    pokemon: Pokemon
}

export default function PokemonTable() {
    const { pokemon, pokemonList } = useSelector((state: ReduxState) => 
        state.pokemon)
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchData() {
            const response = await fetchAllPokemon()
            if (Array.isArray(response)) {
                const importantData = extractImportantData(response)
                dispatch(setPokemonList(importantData))
            }
        }

        fetchData()
    }, [dispatch])

    if (!pokemonList) return <Loading />
    
    if (pokemon !== -1) {
        return <Pokemon />
    } else {
        return (
            <div className="wrapper">
                <div className="pokemon_table">
                    <PokemonTableHeader />
                <div className="header_margin"/>
                {pokemonList && pokemonList.map((pokemon) => 
                <ListItem key={pokemon.name} pokemon={pokemon} /> )}
            </div>
            </div>
        )
    }
}

/**
 * Displays one item in the list
 * @param pokemon   ID of the pokemon to display 
 * @param show      List of user hidden table attributes
 * @param index     Index to 
 * @returns 
 */
function ListItem({pokemon}: PokemonList): JSX.Element {
    const { show } = useSelector((state: ReduxState) => state.pokemon)
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(setPokemon(pokemon.id - 1))
    }

    function columns(): string {
        let count = 2
        Object.values(show).filter(value => value && count++)
        return "1fr ".repeat(count)
    }

    return (
        <>
            <div className="line" />
                <div 
                    className="table_content" 
                    style={{gridTemplateColumns: columns()}} 
                    onClick={handleClick}
                >
                    {show.image && <img 
                        className="table_item_image" 
                        src={pokemon.image ? pokemon.image : "noimg.png"} 
                        alt={pokemon.name} 
                    />}
                    <p className="table_item">{pokemon.name}</p>
                    <p className="table_item">{pokemon.id}</p>
                    {show.weight && <p className="table_item">
                        {pokemon.weight}
                    </p>}
                    {show.height && <p className="table_item">
                        {pokemon.height}
                    </p>}
                    {show.types && <div className="table_item">
                        {pokemon.types.join(", ")} 
                    </div>}
            </div>
        </>
    )
}
