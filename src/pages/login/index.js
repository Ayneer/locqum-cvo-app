import { Typography } from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import LoginForm from './form';
import loginIlustration from 'assets/images/login-ilustration.jpg';
import { useDispatch } from 'react-redux';
import { logIn } from 'actions/account';

const validateEmail = email => {
    const errors = {};

    if (!email.trim()) {
        errors.email = 'Requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.trim())) {
        errors.email = 'Email invalido';
    }

    return errors;
}

const validatePassword = password => {
    const errors = {};

    if (!password.trim()) {
        errors.password = 'Requerido';
    } else if (password.trim().length < 6) {
        errors.password = 'Debe ingresar una cadena mayor a 6 digitos';
    }

    return errors;
}

//Componente encargado de solicitar y verificar las credenciales de acceso al aplicativo
const Login = () => {

    const dispatch = useDispatch();
    const _logIn = (userName, password, callBack) => dispatch(logIn(userName, password, callBack));

    //Metodo encargado de tomar los datos, y finalmente solicitar el acceso al aplicativo
    const _login = (values, { setSubmitting }) => {
        const email = values.email.trim();
        const password = values.password.trim();

        _logIn(email, password, error => {
            if(error){
                setSubmitting(false);
            }
        });
    }

    //Validación de los datos del formulario
    const _validateForm = values => {
        const { email, password } = values;
        const mailErrors = validateEmail(email);
        const passwordErrors = validatePassword(password);
        const errors = {
            ...mailErrors,
            ...passwordErrors
        };

        return errors;
    }

    return (
        <CSSTransitionGroup
            component="div"
            transitionName="TabsAnimation"
            transitionAppear={true}
            transitionAppearTimeout={0}
            transitionEnter={false}
            transitionLeave={false}
        >
            <div className={"login"}>

                {/* Imagen */}
                <div className="ilustration">
                    <img src={loginIlustration} alt="Logo" />
                </div>

                <div className="content">

                    {/* Titulo */}
                    <Typography className="title" variant="h6" noWrap>
                        Inicio de sesión
                    </Typography>

                    {/* Formulario */}
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        onSubmit={_login}
                        validate={_validateForm}
                    >
                        {({ submitForm, isSubmitting }) => <LoginForm isSubmitting={isSubmitting} submitForm={submitForm} />}
                    </Formik>

                    {/* Footer del login */}
                    <div className="title-footer">
                        <Typography variant="caption" noWrap>
                            ¿No tienes una cuenta? <Link to="#">Registrate!</Link>
                        </Typography>
                    </div>
                </div>

            </div>
        </CSSTransitionGroup>
    )
}

export default Login;