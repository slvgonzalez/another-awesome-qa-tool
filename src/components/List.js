import React, {useState} from 'react'


const List = () => {

  const [array, setArray] = useState(["hola","caracola"])

  const addQuestion = () => {
    console.log('test');
  }

  return (
    <div className="list">
      <button onClick={addQuestion}> Add question </button>
      {
        array.map((item, index) =>
          <p key={index}>{item}</p>
        )
      }

    </div>
  )
}

export default List
