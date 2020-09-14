import { Divider, Typography } from '@material-ui/core';
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Container } from 'reactstrap';

const Home = () => {
    return (
        <CSSTransitionGroup
            component="div"
            transitionName="TabsAnimation"
            transitionAppear={true}
            transitionAppearTimeout={0}
            transitionEnter={false}
            transitionLeave={false}
        >
            {/* Cabecera */}
            <div className="header-page">
                <Typography variant="h5">Consulta de servicios</Typography>
                <Typography variant="subtitle1">Este módulo contiene las funcionalidades necesarias para consultar el cálculo de horas de trabajo para cualquier técnico por semana.</Typography>
                <Divider style={{ margin: 10 }} />
            </div>

            {/* Cuerpo */}
            <Container fluid className={"body-page"}>
                
            </Container>

        </CSSTransitionGroup>
    )
}

export default Home;