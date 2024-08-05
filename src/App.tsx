import React from 'react';
import avatar from './images/avatar.png';
import './App.css';

// Logo
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="Avatar" alt="avatar" />
      </header>
    </div>
  );
}

export default App;
