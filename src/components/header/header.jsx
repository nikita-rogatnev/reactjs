import React from 'react';
import styles from './header.scss';

import Navigation from '../navigation/navigation';

function Header() {
    return (
        <header className={styles.header}>
            <Navigation/>
        </header>
    )
}

export default Header;
