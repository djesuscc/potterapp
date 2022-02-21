import { types } from "../types/types";

const initialState = {
    characters: [],
    loaded: false,
}

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.receiveCharacters:
            return {
                ...state,
                characters: action.payload,
                loaded: true,
            }
        case types.addNewCharacter:
            return {
                ...state,
                characters: [...state.characters, action.payload]
            }
        case types.updateFavCharacter:
            return {
                ...state,
                characters: state.characters.map(
                    (character) => (character.id === action.payload.id) ? action.payload : character
                )
            }
        default:
            return state;
    }
}