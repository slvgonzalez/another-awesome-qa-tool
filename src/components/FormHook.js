import React from "react";
import { useForm } from "react-hook-form";

const FormHook = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data, e) => {
    console.log(data)
    e.target.reset();
  }

    return (
      <>
        <h1>this is the form using Form Hook</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Question:</label>
          <input
             id="pregunta"
             className="form-control my-2"
             type="text"
             {...register('pregunta', { required: true, minLength: 10 })}
          />

          { errors.pregunta && errors.pregunta.type === "required" && <span className="text-danger text-small d-block mb-2">A question is required.</span> }
          {errors.pregunta && errors.pregunta.type === "minLength" && <span className="text-danger text-small d-block mb-2">The question must have at least 10 characters.</span>}

          <label htmlFor="name">Answer:</label>
          <input
            id="respuesta"
            className="form-control my-2"
            type="text"
            {...register('respuesta', { required: true, minLength: 10 })}
          />

          {errors.respuesta && errors.respuesta.type === "required" && <span className="text-danger text-small d-block mb-2">An answer is required</span>}
          {errors.respuesta && errors.respuesta.type === "minLength" && <span className="text-danger text-small d-block mb-2">The answer must be elavorated (min 10 characters).</span>}

          <button className="btn btn-primary">Add question</button>
        </form>
      </>
    )
}

export default FormHook
