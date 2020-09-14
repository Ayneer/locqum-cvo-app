import React from 'react';
import { CheckRounded, InfoRounded, WarningRounded } from "@material-ui/icons";
//Constantes generales
import { CLEAR_ALL_REDUCERS } from "actions";
import { toast } from "react-toastify";
import { Col, Row } from "reactstrap";

//Constantes locales
export const SHOW_NOTIY_ERROR = "SHOW_NOTIY_ERROR";
export const SHOW_NOTIY_SUCCESS = "SHOW_NOTIY_SUCCESS";
export const SHOW_NOTIY_INFO = "SHOW_NOTIY_INFO";

//Estos en su forma inicial
const initState = {

}

//Cuerpo de la notificación
const NotificationBody = ({ closeToast, message, icon }) => {
    return (
        <Row onClick={closeToast} style={{ alignItems: 'center', display: 'flex' }}>
            <Col xl={2} xs={2} >{icon}</Col>
            <Col xl={10} xs={10} style={{ paddingLeft: 9 + 'px' }}><span>{message}</span></Col>
        </Row>
    )
}

//Manejo de los estados del menú con redux
export const handleError = (state = initState, action) => {
    switch (action.type) {

        case CLEAR_ALL_REDUCERS: {
            return {
                ...state,
                ...initState
            }
        }

        case SHOW_NOTIY_ERROR: {

            const { autoClose, message } = action;

            toast.error(
                <NotificationBody
                    message={ message }
                    icon={<WarningRounded className="icon-notificacion" />}
                />,
                { autoClose }
            );

            return state;
        }

        case SHOW_NOTIY_SUCCESS: {

            const { autoClose, message } = action;

            toast.error(
                <NotificationBody
                    message={ message }
                    icon={<CheckRounded className="icon-notificacion" />}
                />,
                { autoClose }
            );

            return state;
        }

        case SHOW_NOTIY_INFO: {

            const { autoClose, message } = action;

            toast.error(
                <NotificationBody
                    message={ message }
                    icon={<InfoRounded className="icon-notificacion" />}
                />,
                { autoClose }
            );

            return state;
        }

        default:
            return state;
    }
}

export const _showErrorNotification = (message, autoClose = 5000) => ({ type: SHOW_NOTIY_ERROR, autoClose, message });
export const _showSuccessNotification = (message, autoClose = 5000) => ({ type: SHOW_NOTIY_SUCCESS, autoClose, message });
export const _showInfoNotification = (message, autoClose = 5000) => ({ type: SHOW_NOTIY_INFO, autoClose, message });