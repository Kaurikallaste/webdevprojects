import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Routes from './routes';

const App = () => {
    return (
        <Routes />
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
