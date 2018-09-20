import React, {Component} from 'react';
import {IoIosMenu, IoIosCloseCircleOutline} from 'react-icons/io';
import styles from './navigation.scss';

import Logo from '../logo/logo';

let navigationLink = [
    {
        'text': 'Link 1',
        'url': '#',
        'target': '_self'
    },
    {
        'text': 'Link 2',
        'url': '#',
        'target': '_self'
    },
    {
        'text': 'Link 3',
        'url': '#',
        'target': '_self'
    }
];

function getArrayItems(item, index) {
    let arrayItem = (
        <li className="navigation__menu-item" key={index}>
            <a href={item.url}
               target={item.target}
               className="navigation__menu-link">
                {item.text}
            </a>
        </li>
    );

    return arrayItem;
}

class Navigation extends Component {
    state = {
        isOpen: true
    };

    render() {
        let navigationLinks = this.state.isOpen &&
            <ul className="navigation__menu">{navigationLink.map(getArrayItems)}</ul>

        return (
            <nav className={styles.navigation}>
                <Logo/>
                <button onClick={this.handleClick} type="button" className="navigation__toggle">
                    {this.state.isOpen
                        ? (<IoIosCloseCircleOutline className="navigation__toggle-svg"/>)
                        : (<IoIosMenu className="navigation__toggle-svg"/>)
                    }
                </button>
                {navigationLinks}
            </nav>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Navigation;
