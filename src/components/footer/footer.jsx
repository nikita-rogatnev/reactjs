import React, {Component} from 'react';
import styles from './footer.scss';

import FooterNavigation from "./footer-navigation/footer-navigation";
import FooterSocials from "./footer-socials/footer-socials";
import FooterSponsors from "./footer-sponsors/footer-sponsors";
import FooterCopyright from "./footer-copyright/footer-copyright";

class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <div className="footer__wrapper">
                    <FooterNavigation/>
                    <FooterSocials/>
                    <FooterSponsors/>
                    <FooterCopyright/>
                </div>
            </footer>
        );
    }
}

export default Footer;
