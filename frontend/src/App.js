import React from 'react';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Hompage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>Login</li>
        </ul>
      </Header>
    </>
  );
}

export default App;