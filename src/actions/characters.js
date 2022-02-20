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