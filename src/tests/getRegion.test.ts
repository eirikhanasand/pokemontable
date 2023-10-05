import getRegion from '../utils/getRegion'

describe("getRegion", () => {
    it("should currectly return the region and generation of a pokemon", () => {
        const mockData = {
            abilities: [
              { ability: [Object], is_hidden: false, slot: 1 },
              { ability: [Object], is_hidden: true, slot: 3 }
            ],
            base_experience: 142,
            forms: [
              {
                name: 'ivysaur',
                url: 'https://pokeapi.co/api/v2/pokemon-form/2/'
              }
            ],
            game_indices: [
              { game_index: 9, version: [Object] },
              { game_index: 9, version: [Object] },
              { game_index: 9, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] },
              { game_index: 2, version: [Object] }
            ],
            height: 10,
            held_items: [],
            id: 2,
            is_default: true,
            location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/2/encounters',
            moves: [
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] },
              { move: [Object], version_group_details: [Array] }
            ],
            name: 'ivysaur',
            order: 2,
            past_types: [],
            species: {
              name: 'ivysaur',
              url: 'https://pokeapi.co/api/v2/pokemon-species/2/'
            },
            sprites: {
              back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
              back_female: null,
              back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png',
              back_shiny_female: null,
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
              front_female: null,
              front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png',
              front_shiny_female: null,
              other: {
                dream_world: [Object],
                home: [Object],
                'official-artwork': [Object]
              },
              versions: {
                'generation-i': [Object],
                'generation-ii': [Object],
                'generation-iii': [Object],
                'generation-iv': [Object],
                'generation-v': [Object],
                'generation-vi': [Object],
                'generation-vii': [Object],
                'generation-viii': [Object]
              }
            },
            stats: [
              { base_stat: 60, effort: 0, stat: [Object] },
              { base_stat: 62, effort: 0, stat: [Object] },
              { base_stat: 63, effort: 0, stat: [Object] },
              { base_stat: 80, effort: 1, stat: [Object] },
              { base_stat: 80, effort: 1, stat: [Object] },
              { base_stat: 60, effort: 0, stat: [Object] }
            ],
            types: [ { slot: 1, type: [Object] }, { slot: 2, type: [Object] } ],
            weight: 130
        }

        const result = getRegion(mockData.id)

        expect(result).toBeInstanceOf(Object)
        expect(Object.keys(result).length).toEqual(3)
        expect(Object.values(result).length).toEqual(3)

        expect(result).toHaveProperty("end")
        expect(result).toHaveProperty("generation")
        expect(result).toHaveProperty("region")
    })
})
