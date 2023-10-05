import fetchPokemonPage from '../utils/fetchPokemon'

describe("fetchPokemon", () => {
    test("fetches pokemon from API with needed parameters", async () => {
        const result = await fetchPokemonPage(10, 1)
      
        expect(result).toBeInstanceOf(Array)

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
      });
})
