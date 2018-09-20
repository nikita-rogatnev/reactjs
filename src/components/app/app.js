import React, {Component} from 'react';
import styles from '../../styles/styles.scss';

import Header from '../header/header';
import Main from '../main/main';
import Aside from '../aside/aside';
import Footer from '../footer/footer';
import Modal from '../modal/modal';

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <Header/>
                <Main/>
                <Aside/>
                <Footer/>
                <Modal/>
            </div>
        );
    }
}

export default App;
