import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getApiInfo() {
    try {
        let link = 'https://pokeapi.co/api/v2/pokemon/';
        let pokes = [];
        do {
            let response = await axios.get(link);
            let pokeApi = response.data;
            let auxPoke = pokeApi.results.map(e => ({
                name: e.name,
                url: e.url,
            }));
            pokes.push(...auxPoke);
            link = pokeApi.next;
        } while (link != null && pokes.length < 200);
        
        let pokeData = await Promise.all(pokes.map(async e => {
            let pokemon = await axios.get(e.url);
            return {
                id: pokemon.data.id,
                name: pokemon.data.name,
                img: pokemon.data.sprites.other.home.front_default,
                types: pokemon.data.types.map(t => t.type.name), // Solo almacenamos los nombres de los tipos
                hp: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                speed: pokemon.data.stats[5].base_stat,
                height: pokemon.data.height,
                weight: pokemon.data.weight,
            };
        }));
        return pokeData;
    } catch (error) {
        console.log(error);
    }
}

export const getDetail = async (params) => {
    try {
        const apiData = await axios.get(`${API_URL}/${params}`);
        const data = apiData.data;
        const pokemon = {
            id: data.id,
            name: data.name,
            img: data.sprites.other.home.front_default,
            types: data.types.map(t => t.type.name), // Solo almacenamos los nombres de los tipos
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight,
        };
        return pokemon;
    } catch (error) {
        console.log(error);
    }
};
