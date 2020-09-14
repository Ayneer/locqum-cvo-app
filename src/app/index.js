import React, { useEffect } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

//Routes
import { APP, LOGIN } from 'layout/verticalMenu/menuOptions/routes';

//Components
import Layout from 'layout';
import Login from 'pages/login';

//Redux
import { _getLoadingSesion, _getUser } from 'reducers/account';
import { useDispatch, useSelector } from 'react-redux';
import Auth from 'storage/token';
import CustomLoader from 'components/custom-loader';
import { validateAccessToken } from 'actions/account';



//Componente encargado de controlar el acceso hacia la interfaz principal del aplicativo, validando la existencia de un usuario/token.
const App = () => {

    const dispatch = useDispatch();

    const userAuth = useSelector(({ account }) => _getUser(account));
    const loadingSesion = useSelector(({ account }) => _getLoadingSesion(account));

    useEffect(() => {
        // Recuperar el usuario
        const _validateAccessToken = (accessToken, callBack) => dispatch(validateAccessToken(accessToken, callBack));
        if(Auth.getToken() && !userAuth){
            _validateAccessToken(Auth.getToken(), () => {});
        }
        return () => {}
    }, [userAuth, dispatch]);

    if(Auth.getToken() && loadingSesion){
        return(
            <CustomLoader show={loadingSesion} message={"Cargando la sesión, por favor espere..."} />
        )
    }

    return (
        <div>
            {userAuth ?
                <Switch>
                    <Route path={APP} component={Layout} />
                    <Route path="/" render={() => <Redirect to={APP} />} />
                </Switch>
                :
                <Switch>
                    <Route path={LOGIN} component={Login} />
                    <Route path="/" render={() => <Redirect to={LOGIN} />} />
                </Switch>
            }
            <ToastContainer />
        </div>
    )
}

export default withRouter(App);