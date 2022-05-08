import React from 'react';
import Entry from './components/Entry.jsx'
import FormHook from './components/FormHook.js'
//import Form from './components/Form.js'

import './App.css';

function App(props) {

  return (
    <div className="container mt-5">
      <h1>The awesome Q&A tool</h1>
      <FormHook />
      <h3>Listed questions</h3>
    </div>
  );
}

export default App;
