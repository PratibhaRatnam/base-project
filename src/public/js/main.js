import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

const App = () => <h1 className="main">Hello world!!!</h1>;

ReactDom.render(<App />, document.getElementById('root'));