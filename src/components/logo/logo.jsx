import React, {Component} from 'react';
import styles from './logo.scss';

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <a className="logo__link" aria-label="Home">
                    Logo
                </a>
            </div>
        )
    }
}

export default Logo;
