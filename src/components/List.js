import React, {useState} from 'react'


const List = () => {

  const [array, setArray] = useState(["hola","caracola"])

  return (
    <div className="list">
      {
        array.map((item, index) =>
          <p key={index}>{item}</p>
        )
      }

    </div>
  )
}

export default List
