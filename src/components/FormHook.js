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
            className="question_input my-6"
            {...register('pregunta', {
                required: {
                  value: true,
                  message: "A question is required",
                  },
                minLength: {
                  value: 10,
                  message: "Min 10 characters"
                }
              })
            }
          />
          <input
            className="question_input my-6"
            {...register('respuesta',{
                required: {
                  value: true,
                  message: "A question is required",
                  },
                minLength: {
                  value: 10,
                  message: "Min 10 characters"
                }
              })
            }
          />
          <button>Add question</button>
        </form>
      </>
    )
}

export default FormHook
