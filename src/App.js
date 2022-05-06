import React from 'react';
import Entry from './components/Entry.jsx'
import FormHook from './components/FormHook.js'
//import Form from './components/Form.js'

import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <h1>The awesome Q&A tool</h1>
      <Entry pregunta="jkhjfhjkfjhdjh" respuesta="hayfjijfirdidr" />
      <FormHook />
    </div>
  );
}

export default App;
