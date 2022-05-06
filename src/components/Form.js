import React, {useState} from 'react'


const Form = () => {
  const [list, setList] = useState({
    question: "",
    answer: ""
  })

  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setList({
      ...list,
      [event.target.name] : event.target.value
    })
  }



  return (
    <div>
      <form className="row">
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            name="question"
            onChange={handleInputChange}
            placeholder="Enter your question"
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            name="answer"
            onChange={handleInputChange}
            placeholder="The answer goes here"
          />
        </div>
        <button className="btn btn-primary submit-button" type="submit">Add question</button>
      </form>
    </div>
  )
}

export default Form
