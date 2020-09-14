import { Link, withRouter } from "react-router-dom";
import classnames from 'classnames';
import React from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { toggleMenu } from "actions/menu";
import { CLOSE } from "../routes";
import { logOut } from "actions/account";

const DefaultLink = ({
    className,
    classNameActive,
    classNameHasActiveChild,
    active,
    hasActiveChild,
    to,
    externalLink,
    hasSubMenu,
    toggleSubMenu,
    activateMe,
    children,
    history
}) => {

    const link = to.replace(/^#/, '');

    //Para disparar las acciones de redux
    const dispatch = useDispatch();
    const _toggleMenu = () => dispatch(toggleMenu(false));
    const _logOut = () => dispatch(logOut());

    //Para el manejo de mediaQuery
    const theme = useTheme();
    const isSm_Xs = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

    const _toggleSubMenu = (e) => {
        toggleSubMenu(e);
    }

    const _onClickMenu = (e) => {
        if (link === CLOSE) {
            _logOut();
        } else if (isSm_Xs) {
            _toggleMenu();
        }
    }

    return (
        <Link
            className={classnames(
                className,
                active && classNameActive,
                hasActiveChild && classNameHasActiveChild,
            )}
            to={link}
            onClick={hasSubMenu ? _toggleSubMenu : _onClickMenu}
            target={externalLink ? '_blank' : undefined}
        >
            {children}
        </Link>
    )

};

export default withRouter(DefaultLink);