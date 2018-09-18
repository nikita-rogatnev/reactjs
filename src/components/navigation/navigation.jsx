import React from 'react';
import styles from './navigation.scss';

import Logo from '../logo/logo';

const linksList = [
    {
        link: '/articles',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    },
    {
        link: '/posts',
        label: 'Posts'
    }
];



function Navigation() {
    return (
        <nav className={styles.navigation}>
            <Logo/>

            <ul className={styles.navigation__menu}>
                <li className={styles.navigation__item}>
                    <a className={styles.navigation__link}>

                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
