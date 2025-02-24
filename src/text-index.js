import React from 'react';
import ReactDOMClinet from 'react-dom/client';

const root = document.getElementById('root');
const rootElement = ReactDOMClient.createRoot(root);

const h1 = React.createElement('h1', {}, 'Hello World');
const p = React.createElement('p', {}, 'This is React sample application');
const div = React.createElement('div', {}, h1, p);

rootElement.render(div);