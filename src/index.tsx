import 'core-js/features/array/flat-map';
import 'core-js/features/map';
import 'core-js/features/promise';
import 'core-js/features/set';
import 'raf/polyfill';
import 'whatwg-fetch';
import 'normalize.css';

import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components/app/app';
import { store } from './store';
import { HistoryLayer } from './wrappers/history-layer';
import { InitialLayer } from './wrappers/initial-layer';
import { StorageLayer } from './wrappers/storage-layer';

ReactDOM.render(
    <Provider store={store}>
        <InitialLayer>
            <StorageLayer>
                <HistoryLayer>
                    <App />
                </HistoryLayer>
            </StorageLayer>
        </InitialLayer>
    </Provider>,
    document.getElementById('root')
);
