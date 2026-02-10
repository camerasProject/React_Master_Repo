import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Fourth = () => {
    const [formData,setFormData]=useState([]);

    const {
    register, // It will handle the change of the input field and store the value in the form state
    handleSubmit, // 
    watch,
    formState: { errors },
    reset
  } = useForm()

  function submitData(data){
    setFormData([...formData,data]) // It will add the new data to the existing form data
    reset() // It will reset the form after submit
  }

  console.log(formData)

  return (
    <div>
        {/* Form in react can be build with two ways 
            1.using UseForm Hook
            2.Using state and onChange event
        */}

        <form onSubmit={handleSubmit(submitData)}>
            <label htmlFor="">First Name:</label>
            <input type="text" 
            {...register("firstname",
            {
                required:true,
                minLength:{value:5,message:"First name should be at least 5 characters"},
                maxLength:{value:10,message:"First name should be at most 10 characters"}
            }
            )}/>

            {
                errors.firstname && <><br /><span style={{color:"red"}}>{errors.firstname.message}</span></>
            }
            <br />
            <label htmlFor="">Last Name: </label>
            <input type="text" {...register("lastname",{required:true,})}/>
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Fourth
