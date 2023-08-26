import React, { useState } from 'react'

 function FormExample() {
    const [formData,setFormData]= useState({
        name:'',
        email:'',
    });
    const handleInputChange =(event)=>{
        const{name,value}=event.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]:value,
        }));
       

    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData)
    }
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:
        <input type='text' name='name' value={formData.name} onChange={handleInputChange}/>
        </label>
        <br/>
        <lable>
            Email:
            <input type='email' name='email' value={formData.email} onChange={handleInputChange}/>
        </lable>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default FormExample