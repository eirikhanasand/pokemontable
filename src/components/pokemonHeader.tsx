import { useDispatch, useSelector } from "react-redux"
import "../styles/pokemonHeader.css"
import { setPokemon } from "../redux/pokemon"

export default function PokemonHeader() {
    const dispatch = useDispatch()
    const { pokemon, pokemonList } = useSelector((state: ReduxState) => state.pokemon)

    function goBack() {
       dispatch(setPokemon(-1))
    }

    function previous() {
        dispatch(setPokemon(pokemon - 1))
    }

    function next() {
        dispatch(setPokemon(pokemon + 1))
    }

    return (
        <div className="pokemon_header">
            <img className="pokemon_nav_image" src="arrow.png" alt="Go back" onClick={goBack} />
            <p className="pokemon_display">Displaying pokemon {pokemonList[pokemon].id}: {pokemonList[pokemon].name}</p>
            <div className="pokemon_nav_image_container">
                <img className="pokemon_nav_image" src="left.png" alt="Previous pokemon" onClick={previous} />
                <img className="pokemon_nav_image" src="right.png" alt="Next pokemon" onClick={next} />
            </div>
        </div>
    )
}