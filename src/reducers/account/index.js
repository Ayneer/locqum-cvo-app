import { CLEAR_ALL_REDUCERS } from "actions";

//Constantes locales
const LOAD_USER = "LOAD_USER";
const CHANGE_LOADING_SESION = "CHANGE_LOADING_SESION";

//Estos en su forma inicial
const initState = {
    user: null,
    loadingSesion: true,
}

//Manejo de los estados del menú con redux
export const account = (state = initState, action) => {
    switch (action.type) {

        case CLEAR_ALL_REDUCERS: {
            return {
                ...state,
                ...initState
            }
        }

        case LOAD_USER: {
            return {
                ...state,
                user: action.user,
                loadingSesion: false
            }
        }

        case CHANGE_LOADING_SESION: {
            return {
                ...state,
                loadingSesion: action.loadingSesion
            }
        }

        default:
            return state;
    }
}

export const _loadUser = user => ({ type: LOAD_USER, user });
export const _changeLoadingSesion = loadingSesion => ({ type: CHANGE_LOADING_SESION, loadingSesion });
export const _getUser = state => state && state.user ? state.user : null;
export const _getLoadingSesion = state => state && state.loadingSesion !== undefined ? state.loadingSesion : false;

