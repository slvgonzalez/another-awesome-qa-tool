import React, { useState }from "react";
import { useForm } from "react-hook-form";

const FormHook = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const [ entries, setEntries ] = useState([{
    question: "First question",
    answer: "First answer"
  }])


  const onSubmit = (newEntry, e) => {
    //console.log(newEntry)
    props.addQuestion(newEntry);
    e.target.reset();
  }

  return (
    <>
    <h3>Add a new question</h3>
      <div id="anim">
        <span class="tooltip" data-tooltip="You can find created questions and answers here.">?</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Question:</label>
          <input
              className="form-control"
              id="question"
              type="text"
              placeholder="Type your question here"
              {...register('question', { required: true, minLength: 10 })}
          />

          { errors.question && errors.question.type === "required" && <span className="text-danger text-small d-block mb-2">A question is required.</span> }
          {errors.question && errors.question.type === "minLength" && <span className="text-danger text-small d-block mb-2">The question must have at least 10 characters.</span>}

          <label htmlFor="name">Answer:</label>
          <input
            className="form-control my-2"
            id="answer"
            type="text"
            rows="4"
            placeholder="Type your answer here"
            {...register('answer', { required: true, minLength: 10 })}
          />

          {errors.answer && errors.answer.type === "required" && <span className="text-danger text-small d-block mb-2">An answer is required</span>}
          {errors.answer && errors.answer.type === "minLength" && <span className="text-danger text-small d-block mb-2">The answer must be elavorated (min 10 characters).</span>}
        </div>
        <button className="btn btn-add">Add question</button>
      </form>
    </>
  )
}

export default FormHook
