type PokemonTableHeaderProps = {
    show: {
        image: boolean;
        weight: boolean;
        height: boolean;
        types: boolean;
    }
    setShow: React.Dispatch<React.SetStateAction<{
        image: boolean;
        weight: boolean;
        height: boolean;
        types: boolean;
    }>>
}

/**
 * Displays the header and handles logic related to hiding and displaying
 * certain elements from the list
 * @returns Header for the Pokemon table
 */
export default function PokemonTableHeader({show, setShow}: PokemonTableHeaderProps): JSX.Element {

    function handleImageClick() {
        setShow({...show, image: !show.image})
    }

    function handleWeightClick() {
        setShow({...show, weight: !show.weight})
    }

    function handleHeightClick() {
        setShow({...show, height: !show.height})
    }

    function handleTypesClick() {
        setShow({...show, types: !show.types})
    }

    return (
        <div className="table_header">
            <p 
                className={`table_item_clickable ${show.image ? 'gray-text' : ''}`} 
                onClick={handleImageClick}
            >
                Image
            </p>
            <p className="table_header_item">Name</p>
            <p className="table_header_item">ID</p>
            <p 
                className={`table_item_clickable ${show.weight ? 'gray-text' : ''}`} 
                onClick={handleWeightClick}
            >
                Weight
            </p>
            <p 
                className={`table_item_clickable ${show.height ? 'gray-text' : ''}`} 
                onClick={handleHeightClick}
            >
                Height
            </p>
            <p 
                className={`table_item_clickable ${show.types ? 'gray-text' : ''}`} 
                onClick={handleTypesClick}
            >
                Types
            </p>
        </div>
    )
}