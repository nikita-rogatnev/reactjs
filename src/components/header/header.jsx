import React, {Component} from 'react';
import styles from './header.scss';

import Navigation from '../navigation/navigation';

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className="header__wrapper">
                    <Navigation/>
                </div>
            </header>
        )
    }
}

export default Header;
