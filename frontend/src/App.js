import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Developer App', 'Init front-end web']);

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