import React, {Component} from 'react';
import styles from './main.scss';

import Section from '../section/section';

class Main extends Component {
    render() {
        return (
            <main className={styles.main}>
                <Section/>
            </main>
        )
    }
}

export default Main;
