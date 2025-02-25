import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index_style.css'; // 追加

const root = document.getElementById('root');
const rootElement = ReactDOMClient.createRoot(root);

// const h1 = React.createElement('h1', {}, 'Hello World');
// const p = React.createElement('p', {}, 'This is React sample application');
// const div = React.createElement('div', {}, h1, p);

const element = (
    <div className="container">
        <h1>Hello World</h1>
        <p>This is React sample application</p>
        <p>エレメントを固めて表示</p>
    </div>
);

// rootElement.render(div);
rootElement.render(element);