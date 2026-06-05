import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.js';
import Timer from './components/Timer';
import './index.css';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(<>{<Timer />}</>);
