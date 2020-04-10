import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';


function App() {
  const [projects, setProjects] = useState(['Developer App', 'Init front-end web']);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response);
    })
  }, [])

  function handleAddProject() {
    setProjects([...projects, `New project ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Homepage" />
      <ul>
        {projects.map((project) => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add project</button>      
    </>
  );
}

export default App;