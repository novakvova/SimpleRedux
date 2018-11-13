import React, { Component } from 'react';
import Counter from './Counter';
import store from './store/index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Counter store={store}/>
      </div>
    );
  }
}

export default App;
