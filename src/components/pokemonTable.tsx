import { useEffect, useState } from "react"
import fetchPokemonPage from "../utils/fetchPokemon"
import "../styles/pokemonTable.css"
import PokemonTableHeader from "./pokemonTableHeader"
import Pokemon from "./pokemon"
import { useDispatch, useSelector } from "react-redux"
import { setPokemon, setPokemonList } from "../redux/pokemon"
import extractImportantData from "../utils/extractImportantData"
import Loading from "./loading"

type PokemonList = {
    show: {
        image: boolean;
        weight: boolean;
        height: boolean;
        types: boolean;
    }
    pokemon: Pokemon
}

export default function PokemonTable() {
    const { pokemon, pokemonList, count } = useSelector((state: ReduxState) => state.pokemon)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [show, setShow] = useState({
        image: true,
        weight: true,
        height: true,
        types: true
    })

    useEffect(() => {
        async function fetchData() {
            const response = await fetchPokemonPage(count, page)
            if (Array.isArray(response)) {
                const importantData = extractImportantData(response)
                dispatch(setPokemonList(importantData))
            }
        }

        fetchData()
    }, [page, count])

    if (!pokemonList) return <Loading />
    
    if (pokemon !== -1) {
        return <Pokemon />
    } else {
        return (
            <div className="wrapper">
                <div className="pokemon_table">
                    <PokemonTableHeader show={show} setShow={setShow} />
                <div className="header_margin"/>
                {pokemonList && pokemonList.map((pokemon) => <ListItem key={pokemon.name} pokemon={pokemon} show={show} /> )}
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
function ListItem({pokemon, show}: PokemonList): JSX.Element {
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(setPokemon(pokemon.id - 1))
    }

    return (
        <>
            <div className="line" />
                <div className={"table_content"} onClick={handleClick}>
                    {show.image && <img className="table_item-image" src={pokemon.image} alt={pokemon.name} />}
                    <p className="table_item">{pokemon.name}</p>
                    <p className="table_item">{pokemon.id}</p>
                    {show.weight && <p className="table_item">{pokemon.weight}</p>}
                    {show.height && <p className="table_item">{pokemon.height}</p>}
                    {show.types && <div className="table_item">
                        {pokemon.types.map((type) => (<p key={pokemon.name + type}>{type}</p>))} 
                    </div>}
            </div>
        </>
    )
}
