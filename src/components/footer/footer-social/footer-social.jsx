import React, {Component} from 'react';
import {AccessAlarm} from '@material-ui/icons';
import styles from './footer-social.scss';

let footerSocial = [
    {
        'text': 'Vkontakte',
        'url': 'https://vk.com/',
        'target': '_blank'
    },
    {
        'text': 'Facebook',
        'url': 'https://www.facebook.com/',
        'target': '_blank'
    },
    {
        'text': 'Instagram',
        'url': 'https://www.instagram.com/',
        'target': '_blank'
    },
    {
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
                <AccessAlarm className="footer-social__menu-svg"/>
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
