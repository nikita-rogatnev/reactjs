import React from 'react';
import {render} from 'react-dom';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
    return [
        <Header key='header'/>,
        <Main key='main'/>,
        <Footer key='footer'/>
    ]
}

render(<App/>, document.getElementById('root'));