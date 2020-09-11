import { HOME, ABOUT, CLOSE, EXAMPLE } from '../routes';

export const items = [
    {
        icon: 'far fa-flag',
        label: 'Home',
        to: HOME
    },
    {
        icon: 'far fa-minus-square',
        label: 'Sub menú',
        content: [
            {
                label: 'Example',
                to: EXAMPLE,
            },
        ],
    },
    {
        icon: 'far fa-address-card',
        label: 'About',
        to: ABOUT,
    },
    {
        icon: 'far fa-arrow-alt-circle-left',
        label: 'Cerrar sesión',
        to: CLOSE,
    },
]