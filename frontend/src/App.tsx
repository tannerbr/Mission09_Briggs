import React from 'react';
import Heading from './Heading';
import TeamList from './TeamList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
