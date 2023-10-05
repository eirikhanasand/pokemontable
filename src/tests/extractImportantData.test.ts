import extractImportantData from '../utils/extractImportantData'
import fetchPokemonPage from '../utils/fetchPokemon'

describe("fetchPokemon", () => {
    test("extracts needed parameters from response objects", async () => {
        const result = await fetchPokemonPage(10, 1)
      
        expect(result).toBeInstanceOf(Array);

        result.forEach((pokemon) => {
            expect(pokemon).toHaveProperty("id")
            expect(pokemon).toHaveProperty("generation")
            expect(pokemon).toHaveProperty("region")
            expect(pokemon).toHaveProperty("height")
            expect(pokemon).toHaveProperty("name")
            expect(pokemon).toHaveProperty("species")
            expect(pokemon).toHaveProperty("sprites")
            expect(pokemon).toHaveProperty("stats")
        })

        const desiredResult = extractImportantData(result)

        expect(desiredResult).toBeInstanceOf(Array)

        desiredResult.forEach((pokemon) => {
            expect(pokemon).toHaveProperty("name")
            expect(pokemon).toHaveProperty("id")
            expect(pokemon).toHaveProperty("image")
            expect(pokemon).toHaveProperty("weight")
            expect(pokemon).toHaveProperty("height")
            expect(pokemon).toHaveProperty("types")
            expect(pokemon).toHaveProperty("hp")
            expect(pokemon).toHaveProperty("attack")
            expect(pokemon).toHaveProperty("defense")
            expect(pokemon).toHaveProperty("special_attack")
            expect(pokemon).toHaveProperty("special_defense")
            expect(pokemon).toHaveProperty("speed")
            expect(pokemon).toHaveProperty("species")
            expect(pokemon).toHaveProperty("region")
            expect(pokemon).toHaveProperty("generation")
        })
    })
})
