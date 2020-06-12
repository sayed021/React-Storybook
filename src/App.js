import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Title from './Component/Title/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Title type="h2">Primary heading 2</Title>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
