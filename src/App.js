import React, { useState } from 'react';
import FormHook from './components/FormHook.js'
import QuestionList from './components/QuestionList.jsx';
import { v4 as uuidv4 } from 'uuid';
//import Form from './components/Form.js'
import './App.css';


function App() {

  const entry = {
    question: "esto seriadfkjhkshkf",
    answer: "jfdjijiesfijieeis",
    id: uuidv4()
  }

  const [entries, setEntries] = useState([entry])



  return (
    <div className="container mt-5">
      <h1>The awesome Q&A tool</h1>
      <FormHook />
      <h3>Listed questions</h3>
      <QuestionList entries={entries} />
    </div>
  );
}

export default App;
