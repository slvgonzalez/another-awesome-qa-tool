import React, { useState } from 'react';
import FormHook from './components/FormHook.js'
import QuestionList from './components/QuestionList.jsx';
import { v4 as uuidv4 } from 'uuid';
//import Form from './components/Form.js'
import './App.css';
import EditForm from './components/EditForm.js';


function App() {

  const entry = {
    question: "esto seriadfkjhkshkf",
    answer: "jfdjijiesfijieeis",
    id: uuidv4()
  }

  const [entries, setEntries] = useState([entry])

  const addQuestion = (newQuestion) => {
    newQuestion.id = uuidv4();
    setEntries([...entries, newQuestion])
  }

  const deleteQuestion = (id) => {
    setEntries(entries.filter( entry => entry.id !== id))
  }

  const [editing, setEditing] = useState(false);

  const [selected, setSelected] = useState({
    id: null,
    question: "",
    answer: ""
  })

  const editEntry = (editEntry) => {
    setEditing(true)
    setSelected({
      id: editEntry.id,
      question: editEntry.question,
      answer: editEntry.answer
    })
  }

  const updateEntry = (id, updatedEntry) => {
    setEditing(false);
    setEntries(entries.map( entry => (entry.id === id ? updatedEntry : entry )))
  }

  const deleteAll = () => {
    setEntries([])
  }


  return (
    <div className="container mt-5">

      <h1>The awesome Q&A tool</h1>

      { editing ? ( <EditForm selected={selected} updateEntry={updateEntry}/>): (<FormHook addQuestion={addQuestion}  />) }

      {
        (entries.length > 0) ? (
          <>
            <h3>Listed questions</h3>
            <div className="wrapper">
              <button onClick={() => deleteAll}>Sort alphabetically</button>
              <button>Delete all</button>
              <QuestionList
                entries={entries}
                deleteQuestion={deleteQuestion}
                editEntry={editEntry}
                setEditing={setEditing} />
            </div>
          </>
        ) :  (
          <div className="wrapper">
            <h3>Try adding a question.</h3>
          </div>
        )
      }
    </div>
  )
}

export default App;
