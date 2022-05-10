import React, { useState } from 'react';
import FormHook from './components/FormHook.js'
import QuestionList from './components/QuestionList.jsx';
import EditForm from './components/EditForm.js';
import { v4 as uuidv4 } from 'uuid';
//import Form from './components/Form.js'
import './App.css';


function App() {

  const defaultEntry = {
    question: "Will I complete the assigment by Tuesday?",
    answer: "I hope so, I can't promise the form will be properly styled tough 😭",
    id: uuidv4()
  }

  const [entries, setEntries] = useState([defaultEntry])

  // CRUD
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

  const reset = () => {
    setEntries([defaultEntry])
  }

  // Sorting
  const sortAlphabetically = () => {
    const sorted = [...entries].sort((a, b) => a.question.localeCompare(b.question))
    console.log(sorted);
    setEntries(sorted);
  }


  return (
    <div className="container mt-5">

      <h1>The not so awesome Q&A tool</h1>
      { editing ? ( <EditForm selected={selected} updateEntry={updateEntry}/>): (<FormHook addQuestion={addQuestion}  />) }
      {
        (entries.length > 0) ? (
          <div className="justify-content-center">
            <div className='action-buttons'>
              <button className="btn btn-sort" onClick={() => sortAlphabetically(entries)}>Sort</button>
              <button className="btn btn-reset" onClick={() => reset()}>Reset</button>
              <button className="btn btn-delete" onClick={() => deleteAll()}>Delete all</button>
            </div>
            <div className="wrapper entries">
              <QuestionList
                entries={entries}
                deleteQuestion={deleteQuestion}
                editEntry={editEntry}
                setEditing={setEditing} />
            </div>
          </div>
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
