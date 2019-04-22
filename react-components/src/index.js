import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MapComponent from './API Components/Maps/HereMaps';
import * as serviceWorker from './serviceWorker';

const ele = <MapComponent />;

ReactDOM.render(ele, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
