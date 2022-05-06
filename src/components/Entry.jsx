import React from 'react'

const Entry = (props) => {
  console.log()
  return (
    <div className="list">
      <h3>Listed questions</h3>
      <details>
       <summary>Q: {props.pregunta}</summary>
        <p>A: {props.respuesta}</p>
      </details>
    </div>
  )
}

export default Entry
