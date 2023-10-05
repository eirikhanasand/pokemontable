import { useDispatch, useSelector } from "react-redux"
import "../styles/filter.css"
import { setShow } from "../redux/pokemon"

type PokemonTableHeaderProps = {
    show: {
        image: boolean
        weight: boolean
        height: boolean
        types: boolean
    }
    setShow: React.Dispatch<React.SetStateAction<{
        image: boolean
        weight: boolean
        height: boolean
        types: boolean
    }>>
    toggleFilter: () => void
}

export default function Filter({toggleFilter}: PokemonTableHeaderProps) {
    const { show } = useSelector((state: ReduxState) => state.pokemon)
    const dispatch = useDispatch()
    
    function handleImageClick() {
        dispatch(setShow({...show, image: !show.image}))
    }

    function handleWeightClick() {
        dispatch(setShow({...show, weight: !show.weight}))
    }

    function handleHeightClick() {
        dispatch(setShow({...show, height: !show.height}))
    }

    function handleTypesClick() {
        dispatch(setShow({...show, types: !show.types}))
    }

    return (
        <div className="filter_outline" onClick={toggleFilter}>
            <div className="filter_inner_view" onClick={e => e.stopPropagation()}>
                <p 
                    className="filter_item" 
                    style={{color: show.image ? "green" : "red"}} 
                    onClick={handleImageClick}
                >
                    Image
                </p>
                <p 
                    className="filter_item" 
                    style={{color: show.weight ? "green" : "red"}} 
                    onClick={handleWeightClick}
                >
                    Weight
                </p>
                <p 
                    className="filter_item" 
                    style={{color: show.height ? "green" : "red"}} 
                    onClick={handleHeightClick}
                >
                    Height
                </p>
                <p 
                    className="filter_item" 
                    style={{color: show.types ? "green" : "red"}} 
                    onClick={handleTypesClick}
                >
                    Types
                </p>
            </div>
            <p className="filter_x" onClick={toggleFilter}>❌</p>
        </div>
    )
}
