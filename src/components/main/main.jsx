import React, {Component} from 'react';
import styles from './main.scss';

import Aside from '../aside/aside';
import Section from '../section/section';

class Main extends Component {
    render() {
        return (
            <main className={styles.main}>
                <Aside/>
                <Section/>
            </main>
        )
    }
}

export default Main;
