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
        default:
            return state;
    }
}