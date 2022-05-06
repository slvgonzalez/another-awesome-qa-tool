import React from 'react'

const List = () => {

  const array = ['hola', 'caracola'];

  return (
    <div className="list">
      {
        array.map((item) =>
        <p>{item}</p>
        )
      }

    </div>
  )
}

export default List
