import React, {Component} from 'react';
import styles from './navigation.scss';

import Logo from '../logo/logo';

let navigationLink = {
    'item': {
        'text': 'Link 1',
        'url': '#',
        'target': '_self'
    },
    'item 2': {
        'text': 'Link 2',
        'url': '#',
        'target': '_self'
    },
    'item 3': {
        'text': 'Link 3',
        'url': '#',
        'target': '_self'
    }
};


class Navigation extends Component {
    render() {
        return (
            <nav className={styles.navigation}>
                <Logo/>
                <ul className="navigation__menu">
                    <li className="navigation__menu-item">
                        <a href={navigationLink.item.url}
                           target={navigationLink.item.target}
                           className="navigation__menu-link">
                            {navigationLink.item.text}
                        </a>
                    </li>
                    <li className="navigation__menu-item">
                        <a href={navigationLink.item.url}
                           target={navigationLink.item.target}
                           className="navigation__menu-link">
                            {navigationLink.item.text}
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;
