import React, { useState } from 'react'

const QuestionList = (props) => {

  //console.log(props.entries)

  const listEntries = props.entries.map((entry) =>

    <div className="wrapper card" key={entry.id}>
      <details>
      <summary><strong>Q:</strong>{entry.question}</summary>
        <p><strong>A:</strong>{entry.answer}</p>
      </details>
      <div className="actions">
        <button
          className="btn btn-sort"
          onClick={() => {props.editEntry(entry)}}>
          Edit</button>
        <button
          className="btn btn-delete"
          onClick={() => props.deleteQuestion(entry.id)}>
          Delete</button>
      </div>
    </div>
  )

  return (
    <div className="list">
      {listEntries}
    </div>
  )
}

export default QuestionList
