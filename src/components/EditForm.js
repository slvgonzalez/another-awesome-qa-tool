import React from "react";
import { useForm } from "react-hook-form";

const EditForm = (props) => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: props.selected
  })

  setValue('question', props.selected.question)
  setValue('answer', props.selected.answer)

  const onSubmit = (info, e) => {
    props.updateEntry(props.selected.id, info)
    e.target.reset();
  }

  return (
    <>
    <h3>Editing</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="wrapper">
        <div className="form-group">
          <label htmlFor="name">Question:</label>
          <input
              className="form-control"
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
        </div>

        <button
          className="btn btn-add">
          Save changes
        </button>
      </form>
    </>
  )
}

export default EditForm
