import React, { useState } from 'react'

const Fourth1 = () => {
    const [formData,setFormData]=useState({
        firstname:"",
        lastname:""
    });

    const [allData,setAllData]=useState([]);

    function handleChange(e){
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        setAllData([...allData,formData])
    }

    console.log(allData)
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">First NAme: </label>
            <input type="text" name='firstname' placeholder='Enter First Name' onChange={handleChange}/>
            <br />
            <label htmlFor="">Last NAme:</label>
            <input type="text" name='lastname' placeholder='Enter Last Name' onChange={handleChange}/>
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Fourth1
