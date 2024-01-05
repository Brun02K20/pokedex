// funciones que se comunican con la api de pokeapi para traer las cosas
import axios from "axios";
import { API_HOST } from "../utils/constants.js";

// peticion para obtener un listado de 20 pokemons
const getPokemonApi = async (endpointUrl) => {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await axios.get(endpointUrl || url)
        const result = await response.data
        return result
    } catch (error) {
        throw error
    }
}

// peticion para...... no me acuerdo xd
const getPokemonDetailByUrlApi = async (url) => {
    try {
        const response = await axios.get(url)
        const result = await response.data
        return result
    } catch (error) {
        throw error
    }
}

const getPokemonDetailApi = async (id) => {
    try {
        const url = `${API_HOST}/pokemon/${id}`
        const response = await axios.get(url)
        const result = await response.data
        return result
    } catch (error) {
        throw error
    }
}

export { getPokemonApi, getPokemonDetailByUrlApi, getPokemonDetailApi }