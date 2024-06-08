import React, { useState } from 'react'
export default function Contact() {
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const handleChangeName=(e)=>{
    // console.log(e.target.value);
    setName(e.target.value);
     }
     const handleChangeAge=(e)=>{
     setAge(e.target.value);
     }
  const handleSubmit=()=>{
    // console.log("name"); 
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
  }
   const handleReset=(e)=>{
     localStorage.removeItem("name");
   }
  return (
    <div><div>Contact</div><br/>
      <form>
        <label >Enter the Name:</label>
        <input type="text" onChange={handleChangeName} required/><br/>
        <label >Enter the Age:</label>
        <input type="text" onChange={handleChangeAge} required/><br/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <button type="reset" onClick={handleReset}>Reset</button>
        {/* <button type="reset" onClick={handleReset}>Reset</button> */}
      </form>
      <p>{localStorage.getItem("name")}</p>
      <p>{localStorage.getItem("age")}</p>
    </div> 
  )
}
