import fetchData from "../helpers/fetch";
import { types } from "../types/types";

export const getCharacters = () => {
    return async (dispatch) => {
        try {
            const response = await fetchData('characters');
            const body = await response.json();
            dispatch(storeCharacters(body));
        } catch (err) {
            console.error(err);
        }
    };
};

const storeCharacters = (characters) => ({
    type: types.receiveCharacters,
    payload: characters,
});

export const setFavoriteCharacter = (character) => {
    return (dispatch, getState) => {
        const {
                characterReducer: { favoriteCharacters },
            } = getState();
        if (favoriteCharacters.length < 5) {
            const isFavCharacter = favoriteCharacters.find((fav) => fav.index === character.index);
            if (!isFavCharacter) {
                dispatch(storeFavoriteCharacter(character));
            }
        }
    }
}
export const storeFavoriteCharacter = (character) => ({
    type: types.addFavCharacter,
    payload: character,
})