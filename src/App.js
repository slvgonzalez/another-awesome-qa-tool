import React from 'react';
import List from './components/List.js'
import FormHook from './components/FormHook.js'
import Form from './components/Form.js'

import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <h1>The awesome Q&A tool</h1>
      <List />
      <FormHook />
    </div>
  );
}

export default App;
