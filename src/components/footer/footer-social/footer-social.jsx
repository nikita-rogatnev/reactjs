import React, {Component} from 'react';
import {FaVk, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';

import styles from './footer-social.scss';

let footerSocial = [
    {
        'icon': 'FaVk',
        'text': 'Vkontakte',
        'url': 'https://vk.com/',
        'target': '_blank'
    },
    {
        'icon': 'FaFacebook',
        'text': 'Facebook',
        'url': 'https://www.facebook.com/',
        'target': '_blank'
    },
    {
        'icon': 'FaInstagram',
        'text': 'Instagram',
        'url': 'https://www.instagram.com/',
        'target': '_blank'
    },
    {
        'icon': 'FaTwitter',
        'text': 'Twitter',
        'url': 'https://twitter.com/',
        'target': '_blank'
    }
];

function getArrayItems(item, index) {
    let arrayItem = (
        <li className="footer-social__menu-item" key={index}>
            <a href={item.url}
               target={item.target}
               className="footer-social__menu-link">
                <FaVk className="footer-social__menu-svg"/>
                <span className="visually-hidden">{item.text}</span>
            </a>
        </li>
    );

    return arrayItem;
}

class FooterSocial extends Component {
    render() {
        return (
            <section className="footer-social">
                <div>
                </div>
                <div className="footer-social__wrapper">
                    <h2 className="visually-hidden">Footer Social</h2>
                    <ul className="footer-social__menu">
                        {footerSocial.map(getArrayItems)}
                    </ul>
                </div>
            </section>
        )
    }
}

export default FooterSocial;
