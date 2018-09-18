import React from 'react';
import styles from './header.scss';

import Navigation from '../navigation/navigation';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <Navigation/>
            </div>
        </header>
    )
}

export default Header;
