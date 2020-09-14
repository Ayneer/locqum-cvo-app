import { _changeLoadingSesion, _loadUser } from 'reducers/account';
import { _showErrorNotification } from 'reducers/handleError';
import { clearAllReducers } from 'actions';
import Auth from 'storage/token';

//Acción para iniciar sesión
export const logIn = (username, password, callBack) => {
    return (dispatch, getState, Api) => {
        return Api.account.logIn(username, password).then(res => {

            //Simulo la respuesta
            const ress = {
                errors: [],
                message: "valid token access",
                status: "ok",
                data: { user: { name: "Ayneer Gonzalez" }, token: "LSJIKADCGHBHCVBJDC" }
            }

            if (ress.status === "ok") {

                //Se carga el usuario
                dispatch(_loadUser(ress.data.user));
                Auth.saveToken(ress.data.token);
                callBack(false);

            } else if (ress.status === "error") {
                dispatch(_showErrorNotification(ress.message));
                // callBack(true);
            }


        }).catch(error => {
            dispatch(_showErrorNotification(error.message));
            callBack(true);
        });
    }
}

//Metodo encargadod e cerrar la sesión
export const logOut = () => {
    return (dispatch, getState, Api) => {
        Auth.deleteToken();
        if (!Auth.getToken()) {
            // dispatch(_loadUser(null));
            dispatch(clearAllReducers());
        } else {
            dispatch(_showErrorNotification("Error al intentar cerrar la sesión"));
        }
    }
}

//Acción para registrar un usuario
export const signUp = (username, password, name, role, callBack) => {
    return (dispatch, getState, Api) => {
        return Api.account.signUp(username, password, name, role).then(res => {

            console.log(res)

            // if (res.status === "ok") {
            if (!res.error) {
                //Se carga el usuario
                dispatch(_loadUser(res.data.user));
            } else {
                // } else if (res.status === "error") {
                dispatch(_showErrorNotification(res.error_description));
            }

            callBack();
        }).catch(error => {
            dispatch(_showErrorNotification(error.message));
            callBack();
        });
    }
}

//Acción para validar el token de acceso de un usuario
export const validateAccessToken = (accessToken, callBack) => {
    return (dispatch, getState, Api) => {
        return Api.account.validateAccessToken(accessToken).then(res => {

            //Simulo la respuesta
            const ress = {
                errors: [],
                message: "valid token access",
                status: "ok",
                data: { user: { name: "Ayneer Gonzalez" } }
            }

            if (ress.status === "ok") {
                //Se carga el usuario
                dispatch(_loadUser(ress.data.user));

            } else if (ress.status === "error") {
                dispatch(logOut());
                dispatch(_changeLoadingSesion(false));
                dispatch(_showErrorNotification(res.message));
            }

            callBack();
        }).catch(error => {
            dispatch(_showErrorNotification(error.message));
            callBack();
        });
    }
}

//Acción para actualizar los datos de un usuario
export const updateUser = (username, payload, callBack) => {
    return (dispatch, getState, Api) => {
        return Api.account.updateUser(username, payload).then(res => {

            console.log(res)

            // if (res.status === "ok") {
            if (!res.error) {
                //Se carga el usuario
                dispatch(_loadUser(res.data.user));
            } else {
                // } else if (res.status === "error") {
                dispatch(_showErrorNotification(res.error_description));
            }

            callBack();
        }).catch(error => {
            dispatch(_showErrorNotification(error.message));
            callBack();
        });
    }
}

//Acción para actualizar la contraseña de un usuario
export const updateUserPassword = (username, oldPassword, newPassword, callBack) => {
    return (dispatch, getState, Api) => {
        return Api.account.updateUserPassword(username, oldPassword, newPassword).then(res => {

            console.log(res)

            // if (res.status === "ok") {
            if (!res.error) {
                //Se carga el usuario
                dispatch(_loadUser(res.data.user));
            } else {
                // } else if (res.status === "error") {
                dispatch(_showErrorNotification(res.error_description));
            }

            callBack();
        }).catch(error => {
            dispatch(_showErrorNotification(error.message));
            callBack();
        });
    }
}

//Acción para eliminar un usuario
export const deleteUser = (username, callBack) => {
    return (dispatch, getState, Api) => {
        return Api.account.deleteUser(username).then(res => {

            console.log(res)

            // if (res.status === "ok") {
            if (!res.error) {
                //Se carga el usuario
                dispatch(_loadUser(res.data.user));
            } else {
                // } else if (res.status === "error") {
                dispatch(_showErrorNotification(res.error_description));
            }

            callBack();
        }).catch(error => {
            dispatch(_showErrorNotification(error.message));
            callBack();
        });
    }
}

//Acción para recuperar la contraseña de un usuario
export const recoveryPassword = (username, callBack) => {
    return (dispatch, getState, Api) => {
        return Api.account.recoveryPassword(username).then(res => {

            console.log(res)

            // if (res.status === "ok") {
            if (!res.error) {
                //Se carga el usuario
                dispatch(_loadUser(res.data.user));
            } else {
                // } else if (res.status === "error") {
                dispatch(_showErrorNotification(res.error_description));
            }

            callBack();
        }).catch(error => {
            dispatch(_showErrorNotification(error.message));
            callBack();
        });
    }
}

//Acción para confirmar la recuperación de la contraseña de un usuario
export const confirmRecoveryPassword = (username, code, newPassword, callBack) => {
    return (dispatch, getState, Api) => {
        return Api.account.confirmRecoveryPassword(username, code, newPassword).then(res => {

            console.log(res)

            // if (res.status === "ok") {
            if (!res.error) {
                //Se carga el usuario
                dispatch(_loadUser(res.data.user));
            } else {
                // } else if (res.status === "error") {
                dispatch(_showErrorNotification(res.error_description));
            }

            callBack();
        }).catch(error => {
            dispatch(_showErrorNotification(error.message));
            callBack();
        });
    }
}