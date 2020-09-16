import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import RankGrid from './components/RankGrid';

function Rankings() {
    return (
        <Provider store={store}>
            <RankGrid />
        </Provider>
    );
}

export default Rankings;

if (document.getElementById('rankings')) {
    ReactDOM.render(<Rankings />, document.getElementById('rankings'));
}

