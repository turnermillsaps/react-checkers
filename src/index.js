import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/Board';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

const initialState = {
  board: [],
  pieces: []
}

const reducer = (state = initialState, action) {
  
}

ReactDOM.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
  document.getElementById('board')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();