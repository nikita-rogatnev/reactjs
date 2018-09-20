import React, {Component} from 'react';
import styles from './footer-navigation.scss';

let footerNavigation = [
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
        <li className="footer-navigation__menu-item" key={index}>
            <a href={item.url}
               target={item.target}
               className="footer-navigation__menu-link">
                {item.text}
            </a>
        </li>
    );

    return arrayItem;
}

class FooterNavigation extends Component {
    render() {
        return (
            <section className="footer-navigation">
                <div className="footer-navigation__wrapper">
                    <h2 className="visually-hidden">Footer Navigation</h2>
                    <ul className="footer-navigation__menu">
                        {footerNavigation.map(getArrayItems)}
                    </ul>
                </div>
            </section>
        )
    }
}

export default FooterNavigation;
