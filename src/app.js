import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './module.scss'


import Header from '../src/components/Header';


class App extends Component {
     constructor(props) {
         super(props);
     }

    render() { 
        return (
            <Header />
        );
    }
}
 
ReactDOM.render(
    <App />,
    document.getElementById('root')
);