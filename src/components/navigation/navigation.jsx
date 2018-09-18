import React from 'react';
import styles from './navigation.scss';

import Logo from '../logo/logo';

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <Logo/>
            <ul>
                <li>
                    <a href="#">Menu item</a>
                    <a href="#">Menu item</a>
                    <a href="#">Menu item</a>
                    <a href="#">Menu item</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
