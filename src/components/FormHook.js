import React, { useState }from "react";
import { useForm } from "react-hook-form";

const FormHook = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const [ entries, setEntries ] = useState([{
    pregunta: "First question",
    respuesta: "First answer"
    }])


  const onSubmit = (newEntry, e) => {
    console.log(newEntry)
    e.target.reset();
    setEntries([...entries, newEntry])
  }



    return (
      <>
        <h1>this is the form using Form Hook</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Question:</label>
          <input
             className="form-control my-2"
             id="pregunta"
             type="text"
             {...register('pregunta', { required: true, minLength: 10 })}
          />

          { errors.pregunta && errors.pregunta.type === "required" && <span className="text-danger text-small d-block mb-2">A question is required.</span> }
          {errors.pregunta && errors.pregunta.type === "minLength" && <span className="text-danger text-small d-block mb-2">The question must have at least 10 characters.</span>}

          <label htmlFor="name">Answer:</label>
          <input
            className="form-control my-2"
            id="respuesta"
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
