import { types } from "../types/types";

const initialState = {
    characters: [],
    loaded: false,
    favoriteCharacters: [],
}

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.receiveCharacters:
            return {
                ...state,
                characters: action.payload,
                loaded: true,
            }
        case types.addFavCharacter:
            return {
                ...state,
                favoriteCharacters: [
                    ...state.favoriteCharacters,
                    action.payload,
                ]
            }
        default:
            return state;
    }
}