import { useState } from "react"
import Filter from "./filter"
import { setShow } from "../redux/pokemon"
import "../styles/pokemonTable.css"
import { useSelector } from "react-redux"

/**
 * Displays the header and handles logic related to hiding and displaying
 * certain elements from the list
 * @returns Header for the Pokemon table
 */
export default function PokemonTableHeader(): JSX.Element {
    const { show } = useSelector((state: ReduxState) => state.pokemon)
    const [filter, setFilter] = useState<boolean>(false)

    function toggleFilter() {
        setFilter(!filter)
    }

    function columns(): string {
        let count = 2
        Object.values(show).filter(value => value && count++)
        return "1fr ".repeat(count)
    }

    return (
        <>
            <div 
                className="table_header" 
                style={{gridTemplateColumns: columns()}}
                >
                {show.image && <p className="table_header_item">Image</p>}
                <p className="table_header_item">Name</p>
                <p className="table_header_item">ID</p>
                {show.weight && <p className="table_header_item">Weight</p>}
                {show.height && <p className="table_header_item">Height</p>}
                {show.types && <p className="table_header_item">Types</p>}
            </div>
            <img 
                src="filter.png" 
                alt="Filter table attributes" 
                className="filter_image"
                onClick={toggleFilter}  
            />
            {filter && <Filter 
                show={show} 
                setShow={setShow} 
                toggleFilter={toggleFilter} 
            />}
        </>
    )
}