import React from 'react';
import logo from './logo.png'; // You need to add a ReactJS logo to your src folder
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to my ReactJS application</p>
        <p>
          <a
            href="https://github.com/gadagojuanilkumar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
          >
            Click here for my Git Repo
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/gadagoju-anilkumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
          >
            Click here for my LinkedIn profile
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;













