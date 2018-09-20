import React from 'react';
import styles from './footer.scss';
import FooterNavigation from "./footer-navigation/footer-navigation";
import FooterSocial from "./footer-social/footer-social";
import FooterSponsors from "./footer-sponsors/footer-sponsors";
import FooterCopyright from "./footer-copyright/footer-copyright";

function Footer() {
    return (
        <footer className="footer">
            <FooterNavigation/>
            <FooterSocial/>
            <FooterSponsors/>
            <FooterCopyright/>
        </footer>
    );
}

export default Footer;
