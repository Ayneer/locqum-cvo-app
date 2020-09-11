import { _toggleMenu } from "reducers/menu/inedx";

//Acción que cambia el estado el menú principal del aplicativo
export const toggleMenu = state => {
    return (dispatch, getState, Api) => {
        dispatch(_toggleMenu(state));
    }
}