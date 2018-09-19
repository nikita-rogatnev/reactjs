import React, {Component} from 'react';
import styles from './footer-navigation.scss';

let footerNavigation = {
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

class FooterNavigation extends Component {
    render() {
        return (
            <section className="footer-navigation">
                <div className="footer-navigation__wrapper">
                    <h2 className="visually-hidden">Footer Navigation</h2>
                    <ul className="footer-navigation__menu">
                        <li className="footer-navigation__menu-item">
                            <a href={footerNavigation.item.url}
                               target={footerNavigation.item.target}
                               className="footer-navigation__menu-link">
                                {footerNavigation.item.text}
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default FooterNavigation;
