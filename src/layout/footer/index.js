import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar } from '@material-ui/core';

//Componente encargado de ilustrar el menú horizontal del aplicativo, pero como footer, al final de la pagina
const Footer = () => {

    return (
        <AppBar className={"footer"}>
            <Toolbar className={clsx("text2", "appNavbarRight")}>
                <div>Brand - 2020</div>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;