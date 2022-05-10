import React from 'react'

const QuestionList = (props) => {

  //console.log(props.entries)

  const listEntries = props.entries.map((entry) =>

    <div className="wrapper card" key={entry.id}>
      <div className="icon-action-buttons">
        <button
          className="icon-btn btn-edit"
          onClick={() => {props.editEntry(entry)}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> !--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --<path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z"/></svg>
          </button>
        <button
          className="icon-btn btn-delete"
          onClick={() => props.deleteQuestion(entry.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --<path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/></svg>
          </button>
      </div>
      <details>
        <summary><strong>Q:</strong>{entry.question}</summary>
          <p><strong>A:</strong>{entry.answer}</p>
      </details>
    </div>
  )

  return (
    <div className="list">
      {listEntries}
    </div>
  )
}

export default QuestionList
