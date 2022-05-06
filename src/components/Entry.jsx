import React from 'react'

const Entry = () => {

  const entry = {
    question: "gkjhdgkhdhgfkkd",
    answer: "jsjfjfjfrdririojdr"
  }



  return (
    <div className="list">
      <h3>Listed questions</h3>
      <details>
       <summary>Q: {entry.question}</summary>
        <p>A: {entry.answer}</p>
      </details>
    </div>
  )
}

export default Entry
