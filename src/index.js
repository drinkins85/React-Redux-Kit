import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './style/index.scss';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

