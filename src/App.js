import React from 'react';
import Entry from './components/Entry.jsx'
import FormHook from './components/FormHook.js'
//import Form from './components/Form.js'

import './App.css';

function App(props) {

  const displayEntries = entries.map((each, index) =>
    <Entry key={index} question={each.question} answer={each.answer}/>
  );


  return (
    <div className="container mt-5">
      <h1>The awesome Q&A tool</h1>
      <h3>Listed questions</h3>
      {displayEntries}
      <FormHook />
    </div>
  );
}

export default App;
