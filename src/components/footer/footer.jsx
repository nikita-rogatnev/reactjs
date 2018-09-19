import React, {Component} from 'react';
import styles from './footer.scss';

import FooterNavigation from "./footer-navigation/footer-navigation";
import FooterSocial from "./footer-social/footer-social";
import FooterSponsors from "./footer-sponsors/footer-sponsors";
import FooterCopyright from "./footer-copyright/footer-copyright";

class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <FooterNavigation/>
                <FooterSocial/>
                <FooterSponsors/>
                <FooterCopyright/>
            </footer>
        );
    }
}

export default Footer;
