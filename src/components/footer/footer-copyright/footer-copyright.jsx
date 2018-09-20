import React from 'react';
import styles from './footer-copyright.scss';

let footerCopyright = {
    'year': '2018',
    'author': 'Rogatnev Nikita',
    'text': 'All rights reserved. All other trademarks may be the property of their respective holders',
    'url': 'https://rogatnev.ru',
    'target': '_blank'
};

function FooterCopyright() {
    return (
        <section className="footer-copyright">
            <div className="footer-copyright__wrapper">
                <h2 className="visually-hidden">Footer Copyright</h2>
                <div className="footer-copyright__content">
                    <small className="footer-copyright__year">
                        &copy; {footerCopyright.year}
                    </small>
                    <small className="footer-copyright__text">
                        {footerCopyright.text}
                    </small>
                </div>
                <a href={footerCopyright.url}
                   target={footerCopyright.target}
                   className="footer-copyright__link">
                    {footerCopyright.author}
                </a>
            </div>
        </section>
    )
}

export default FooterCopyright;
