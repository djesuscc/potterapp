import fetchData from "../helpers/fetch";
import { fileUpload } from "../helpers/fileUpload";
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

export const postNewCharacter = (character) => {
    return async (dispatch) => {
        try {
            const { alive, position, image } = character;
            const data = {
                ...character,
                alive: Boolean(alive),
                hogwartsStudent: position === "student",
                hogwartsStaff: position === "staff",
                isFavorite: false,
            }
            const fileUrl = await fileUpload(image);
            data.image = fileUrl;
            const response = await fetchData('characters', data, 'POST');
            const body = await response.json();
            dispatch(setNewCharacter(body));
        } catch (err) {
            console.error(err);
        }
    }
}


export const setNewCharacter = (newCharacter) => ({
    type: types.addNewCharacter,
    payload: newCharacter,
})

export const setFavoriteCharacter = (character) => {
    return async (dispatch, getState) => {
        try {
            const {
                characterReducer: { characters },
            } = getState();
            const favoriteCharacters = characters.filter((ch) => ch.isFavorite);
            let characterToUpdate = {};
            if (favoriteCharacters.length < 5) {
                if (favoriteCharacters.length > 0) {
                    const existCharacter = favoriteCharacters.find((fav) => fav.id === character.id);
                    if (!existCharacter) {
                        characterToUpdate = characters.find((ch) => ch.id === character.id);
                    }
                } else {
                    characterToUpdate = characters.find((ch) => ch.id === character.id);
                }
                characterToUpdate.isFavorite = true;
            }
            if (characterToUpdate.id) {
                const response = await fetchData(`characters/${character.id}`, characterToUpdate, "PUT");
                const body = await response.json();
                dispatch(updateToFavoriteCharacter(body));
            }
        } catch (err) {
            console.error(err);
        }
    }
};

export const removeFavoriteCharacter = (id, characterToUpdate) => {
    return async (dispatch) => {
        try {
            characterToUpdate.isFavorite = false;
            const response = await fetchData(`characters/${id}`, characterToUpdate, "PUT");
            const body = await response.json();
            dispatch(updateToFavoriteCharacter(body));
        } catch (err) {
            console.error(err);
        }
    }
}

const updateToFavoriteCharacter = (characterToUpdate) => ({
    type: types.updateFavCharacter,
    payload: characterToUpdate,
});