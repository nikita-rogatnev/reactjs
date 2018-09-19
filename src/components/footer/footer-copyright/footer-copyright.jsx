import React, {Component} from 'react';
import styles from './footer-copyright.scss';

let footerCopyright = {
    'year': '2018',
    'text': 'Rogatnev Nikita',
    'url': 'https://rogatnev.ru',
    'target': '_blank'
};

class FooterCopyright extends Component {
    render() {
        return (
            <section className="footer-copyright">
                <div className="footer-copyright__wrapper">
                    <h2 className="visually-hidden">Footer Copyright</h2>
                    <small className="footer-copyright__year">
                        &copy; {footerCopyright.year}
                    </small>
                    <a href={footerCopyright.url}
                       target={footerCopyright.target}
                       className="footer-copyright__link">
                        {footerCopyright.text}
                    </a>
                </div>
            </section>
        )
    }
}

export default FooterCopyright;
