import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import ImageHolder from './components/imageHolder'
import FirstPage from './firstPage'
import { BrowserRouter as Router } from 'react-router-dom'

//ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
ReactDOM.render(<React.StrictMode><FirstPage /></React.StrictMode>, document.getElementById('root'));

