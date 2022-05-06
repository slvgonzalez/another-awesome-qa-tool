import React from "react";
import { useForm } from "react-hook-form";

const FormHook = () => {

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

    return (
      <>
        <h1>this is the form using Form Hook</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control my-2"
            {...register('pregunta', {
                required: {
                  value: true,
                  message: "A question is required",
                  },
                minLength: {
                  value: 10,
                  message: "The question should be at least 10 characters long"
                }
              })
            }
          />
          <input
            className="form-control my-2"
            {...register('respuesta',{
                required: {
                  value: true,
                  message: "An answer is required",
                  },
                minLength: {
                  value: 10,
                  message: "The answer should be at least 10 characters long"
                }
              })
            }
          />
          <span className="text-danger text-small d-block mb-2">
            error message
          </span>
          <button className="btn btn-primary">Add question</button>
        </form>
      </>
    )
}

export default FormHook
