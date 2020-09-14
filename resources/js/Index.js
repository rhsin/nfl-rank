import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';

function Index() {
    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}

