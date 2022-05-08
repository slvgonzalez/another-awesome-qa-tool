import React from 'react'

const QuestionList = (props) => {

  console.log(props.entries)

  const listEntries = props.entries.map((entry) =>

    <div className="card" key={entry.id}>
      <details>
      <summary><strong>Q:</strong>{entry.question}</summary>
        <p><strong>A:</strong>{entry.answer}</p>
      </details>
      <button className="btn btn-primary">Edit</button>
      <button
        className="btn btn-primary"
        onClick={() => props.deleteQuestion(entry.id)}
        >
          Delete
      </button>
    </div>
  )

  return (
    <div className="list">
    {listEntries}
    </div>
  )
}

export default QuestionList
