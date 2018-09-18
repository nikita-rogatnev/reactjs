import React, {Component} from 'react';
import styles from './footer.scss';

let footerCopyright = {
    'year': '2018',
    'text': 'Rogatnev Nikita',
    'url': 'https://rogatnev.ru',
    'target': '_blank'
};

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

class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <div className="footer__wrapper">
                    <section className="footer__sponsors">

                    </section>
                    <section className="footer__socials">

                    </section>
                    <section className={styles.footer__navigation}>
                        <ul className={styles.footer__menu}>
                            <li className="footer__menu-item">
                                <a href={footerNavigation.item.url}
                                   target={footerNavigation.item.target}
                                   className="footer__menu-link">
                                    {footerNavigation.item.text}
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="footer__copyright">
                        <small className="footer__year">
                            &copy; {footerCopyright.year}
                        </small>
                        <a href={footerCopyright.url}
                           target={footerCopyright.target}
                           className="footer__copyright-link">
                            {footerCopyright.text}
                        </a>
                    </section>
                </div>
            </footer>
        );
    }
}

export default Footer;
