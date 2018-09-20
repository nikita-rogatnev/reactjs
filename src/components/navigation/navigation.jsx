import React, {Component} from 'react';
import styles from './navigation.scss';
import Logo from '../logo/logo';

let navigationLink = [
    {
        'link': 'Link 1',
        'url': '#',
        'target': '_self'
    },
    {
        'link': 'Link 2',
        'url': '#',
        'target': '_self'
    },
    {
        'link': 'Link 3',
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
        return (
            <nav className="navigation">
                <Logo/>
                {navigationLink.map(getArrayItems)}
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
