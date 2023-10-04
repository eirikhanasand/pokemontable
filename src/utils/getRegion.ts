type RegionObject = {
    end: number
    generation: string 
    region: string
}

/**
 * Gets the generation and region name for each pokemon
 * @param id ID of the pokemon in question
 * @returns Object containing generation and region name
 */
export default function getRegion(id: number): RegionObject {
    const regions = [
        { end: 151,  generation: "Generation I",     region: "Kanto"  },
        { end: 251,  generation: "Generation II",    region: "Johto"  },
        { end: 386,  generation: "Generation III",   region: "Hoenn"  },
        { end: 493,  generation: "Generation IV",    region: "Sinnoh" },
        { end: 649,  generation: "Generation V",     region: "Unova"  },
        { end: 721,  generation: "Generation VI",    region: "Kalos"  },
        { end: 817,  generation: "Generation VII",   region: "Aloha"  },
        { end: 929,  generation: "Generation VIII",  region: "Galar"  },
        { end: 1041, generation: "Generation IX",    region: "Paldea" }
    ]

    const match = regions.find(region => id <= region.end)

    return match ? match : { end: 0, generation: "Unknown", region: "Unknown" }
}
