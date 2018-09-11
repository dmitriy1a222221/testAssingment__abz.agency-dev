import React, { Component } from 'react';
import Header from './component/Header';
import MainContent from './component/MainContent';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
        <MainContent />
      </div>
    );
  }
}

export default App;
