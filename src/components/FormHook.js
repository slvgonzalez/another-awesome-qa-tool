import React from "react";
import { useForm } from "react-hook-form";

const FormHook = () => {

  const { register, error, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            label="question"
            name="title"
            className="question_input my-6"
          />
          <button>Add question</button>
        </form>
      </>
    )
}

export default FormHook
