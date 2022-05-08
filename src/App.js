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

  const addQuestion = (newQuestion) => {
    newQuestion.id = uuidv4();
  }

  const deleteQuestion = (id) => {
    setEntries(entries.filter( entry => entry.id !== id))
  }



  return (
    <div className="container mt-5">
      <h1>The awesome Q&A tool</h1>
      <FormHook addQuestion={addQuestion}/>
      <h3>Listed questions</h3>
      <QuestionList entries={entries} deteteQuestion={deleteQuestion} />
    </div>
  );
}

export default App;
