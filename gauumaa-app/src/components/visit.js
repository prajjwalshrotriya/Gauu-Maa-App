import React, { useEffect, useState } from 'react'
import "./visit.css";

const Visit = () => {
    const initialValue={firstname:"",lastname:"",email:"",phonenumber:"",date:"",text:""};
    const [formValue,setFormValue]=useState(initialValue);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmited,setIsSubmited]=useState(false);

    const handleChange=(e)=>{ 
const {name,value}=e.target;
setFormValue({...formValue, [name]: value});
    };

    const handelSubmit=(e)=>{
      e.preventDefault();
      setFormErrors(validate(formValue));
      setIsSubmited(true);
    }

    useEffect(()=>{
      console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmited){
        setFormValue(initialValue);
      }
    },[formErrors])

    const validate=(values)=>{
      const errors={};
      const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.firstname){
        errors.firstname="firstname is required!";
      }else if(values.firstname.length < 3){
        errors.firstname="first name cannot be less then 3 letters!";
      }
      if (!values.lastname){
        errors.lastname="lastname is required!";
      }else if(values.lastname.length < 3){
        errors.lastname="last name cannot be less then 3 letters!";
      }
      if (!values.email){
        errors.email="email is required!";
      }else if(!regex.test(values.email)){
        errors.email="This is not a valid email format!";
      }
      if (!values.phonenumber){
        errors.phonenumber="phonenumber is required!";
      }else if(values.phonenumber.length !== 10){
        errors.phonenumber="Phone number must have 10 digits";
      }
      if (!values.date){
        errors.date="date is required!";
      }
return errors;
    }
  return (
    <>
      <div id="visit-main">
      <div id="head-line">
      <h2>Please Visit Our Farm Once</h2>
      </div>
      <h4>Please Fill The Form Bellow To Book A Visit</h4>
      <div className="form-box">
        <form onSubmit={handelSubmit}>
            <div className='form-div'>
            <label>
            First Name : <input type="text" name='firstname' placeholder='First name' value={formValue.firstname} onChange={handleChange}/>
            </label>
            <p className='error'>{formErrors.firstname}</p>
            </div>
            <div className='form-div'>
               <label>
               Last Name : <input type="text" name='lastname' placeholder='Last name'  value={formValue.lastname} onChange={handleChange}/>
               <p className='error'>{formErrors.lastname}</p>
               </label>
            </div>
<div className='form-div'>
    <label>
    Email : <input type="email" name="email" id="" placeholder='Your email'  value={formValue.email} onChange={handleChange}/>
    <p className='error'>{formErrors.email}</p>
    </label>
</div>
<div className='form-div'>
    <label>
    Phone Number: <input type="text" name='phonenumber' placeholder='phone number'  value={formValue.phonenumber} onChange={handleChange}/>
    <p className='error'>{formErrors.phonenumber}</p>
    </label>
</div>
<div className='form-div'>
    <label>
    Date Of Visit : <input type="date" name="date" id="" value={formValue.date} onChange={handleChange}/>
    <p className='error'>{formErrors.date}</p>
    </label>
</div>
<div className='form-div'>
    <label>
    Any Message : <textarea cols="30" rows="10" name='text' value={formValue.text} onChange={handleChange}></textarea>
    </label>
</div>
<input className='form-div' type="submit" value="Submit" id='btn'/>
        </form>
        {Object.keys(formErrors).length === 0 && isSubmited ? (<p className='done'>Form Submited Successfully</p> ): null}
      </div>
      </div>
      

    </>
  )
}

export default Visit
