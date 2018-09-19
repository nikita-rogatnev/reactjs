import React, {Component} from 'react';
import styles from './footer-sponsors.scss';

let footerSponsors = [
    {
        'img': '',
        'text': 'Sponsor 1',
        'url': '#',
        'target': '_blank'
    },
    {
        'img': '',
        'text': 'Sponsor 2',
        'url': '#',
        'target': '_blank'
    },
    {
        'img': '',
        'text': 'Sponsor 3',
        'url': '#',
        'target': '_blank'
    },
    {
        'img': '',
        'text': 'Sponsor 4',
        'url': '#',
        'target': '_blank'
    },
    {
        'img': '',
        'text': 'Sponsor 5',
        'url': '#',
        'target': '_blank'
    },
    {
        'img': '',
        'text': 'Sponsor 6',
        'url': '#',
        'target': '_blank'
    },
    {
        'img': '',
        'text': 'Sponsor 7',
        'url': '#',
        'target': '_blank'
    },
    {
        'img': '',
        'text': 'Sponsor 8',
        'url': '#',
        'target': '_blank'
    },
    {
        'img': '',
        'text': 'Sponsor 9',
        'url': '#',
        'target': '_blank'
    }
];

function getArrayItems(item, index) {
    let arrayItem = (
        <li className="footer-sponsors__menu-item" key={index}>
            <a href={item.url}
               target={item.target}
               className="footer-sponsors__menu-link">
                <span className="visually-hidden">{item.text}</span>
                <img src={item.img} className="footer-sponsors__menu-img"/>
            </a>
        </li>
    );

    return arrayItem;
}

class FooterSponsors extends Component {
    render() {
        return (
            <section className="footer-sponsors">
                <div className="footer-sponsors__wrapper">
                    <h2 className="visually-hidden">Footer Sponsors</h2>
                    <ul className="footer-sponsors__menu">
                        {footerSponsors.map(getArrayItems)}
                    </ul>
                </div>
            </section>
        )
    }
}

export default FooterSponsors;
