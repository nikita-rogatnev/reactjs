import React, {Component} from 'react';
import styles from '../../styles/styles.scss';

import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
