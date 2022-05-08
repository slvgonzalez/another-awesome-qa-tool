import React from 'react'

const QuestionList = ({entries}) => {

  console.log(entries)

  const listEntries = entries.map((entry) =>

    <div className="card">
      <details>
      <summary>Q:{entry.question}</summary>
        <p>A: {entry.answer}</p>
      </details>
      <button className="btn btn-primary">Edit</button>
      <button className="btn btn-primary">Delete</button>
    </div>
  )

  return (
    <div className="list">
    {listEntries}
    </div>
  )
}

export default QuestionList
