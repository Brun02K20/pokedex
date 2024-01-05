import { POKEMON_TYPE_COLORS } from "./constants.js";

const getColorPokemon = (types) => {
    const colors = types.map((type) => POKEMON_TYPE_COLORS[type]);
    // Verificar si el segundo elemento es null
    if (types[1] === null) {
        // Si es null, devolver solo el primer color
        return [colors[0], colors[0]];
    } else {
        // Si no es null, devolver ambos colores
        return colors;
    }
};

const getColorOfOneType = (type) => {
    return POKEMON_TYPE_COLORS[type];
}

export { getColorPokemon, getColorOfOneType }