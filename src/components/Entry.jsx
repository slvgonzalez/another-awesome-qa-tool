import React from 'react'

const Entry = ({entries}) => {

  const entry = {
    question: "gkjhdgkhdhgfkkd",
    answer: "jsjfjfjfrdririojdr"
  }



  return (
    <div className="list">
      <details>
       <summary>Q: {entries.question}</summary>
        <p>A: {entries.answer}</p>
      </details>
    </div>
  )
}

export default Entry
