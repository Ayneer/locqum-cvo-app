import React from 'react';
import { useStayles } from './styles';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

//Maqueta
import AppNavbar from './appNavbar';
import VerticalMenu from './verticalMenu';
import Footer from './footer';

// Componentes
import Home from 'pages/home';
import About from 'pages/about';
import Example from 'pages/example';

//Routes
import { HOME, ABOUT, EXAMPLE } from './verticalMenu/menuOptions/routes';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { toggleMenu } from 'actions/menu';
import { getMenuState } from 'reducers/menu';

//Componente que ilustra la estructura general de aplicativo
const Layout = () => {

    //Estilos del layout
    const classes = useStayles();

     //Para disparar las acciones de redux
     const dispatch = useDispatch();
     const _toggleMenu = state => dispatch(toggleMenu(state));

    //State redux
    const menuState = useSelector(({ menu }) => getMenuState(menu));

    //Para el manejo de mediaQuery
    const theme = useTheme();
    const isSm_Xs = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const betweenLgXl = useMediaQuery(theme.breakpoints.between('lg', 'xl'));

    const _toggleContent = () => {
        if(isSm_Xs && menuState){
            _toggleMenu(false)
        }
    }

    return (
        <div className={classes.root}>

            {/* Menú horizontal */}
            <AppNavbar title={"Front-end"} />

            {/* Menú vertical */}
            <VerticalMenu />

            {/* Contenido del aplicativo */}
            <div
                className={clsx("containerContent", {
                    "containerContentActive": menuState && betweenLgXl,
                    "containerContentBlock": isSm_Xs && menuState
                })}
                onClick={_toggleContent}
            >

                {/* Necesario para ajustarse a la altura del menú vertical */}
                <div className={classes.toolbar} />

                <main className={"content"}>

                    {/* Rutas para el contenido del aplicativo */}
                    <Switch>
                        <Route exact path={HOME} component={Home} />
                        <Route exact path={ABOUT} component={About} />
                        <Route exact path={EXAMPLE} component={Example} />
                        <Route path="/" render={() => <Redirect to={HOME} />} />
                    </Switch>

                </main>

            </div>

            {/* Footer del aplicativo */}
            <Footer />
        </div>
    )
}

export default Layout;