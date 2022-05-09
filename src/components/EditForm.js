import React, { useState }from "react";
import { useForm } from "react-hook-form";

const EditForm = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: props.selected
  })

  console.log(props.selected)

  const onSubmit = (e) => {
    //console.log(newEntry)
    e.target.reset();
  }

  return (
    <>
    <h3>Edit quiestion</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Question:</label>
        <input
            className="form-control my-2"
            id="question"
            type="text"
            {...register('question', { required: true, minLength: 10 })}
        />

        { errors.question && errors.question.type === "required" && <span className="text-danger text-small d-block mb-2">A question is required.</span> }
        {errors.question && errors.question.type === "minLength" && <span className="text-danger text-small d-block mb-2">The question must have at least 10 characters.</span>}

        <label htmlFor="name">Answer:</label>
        <input
          className="form-control my-2"
          id="answer"
          type="text"
          {...register('answer', { required: true, minLength: 10 })}
        />

        {errors.answer && errors.answer.type === "required" && <span className="text-danger text-small d-block mb-2">An answer is required</span>}
        {errors.answer && errors.answer.type === "minLength" && <span className="text-danger text-small d-block mb-2">The answer must be elavorated (min 10 characters).</span>}

        <button
          className="btn btn-primary">
          Save changes
        </button>
      </form>
    </>
  )
}

export default EditForm
