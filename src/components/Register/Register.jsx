import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css'
import register_image from "../../assets/images/register_image.png"
function Register() {
  const navigate=useNavigate();
  // UserName,email,name,mobile isAgreementChecked
  const [formData, setformData] = useState({
    Name: "",
    email: "",
    username: "",
    mobile: "",
    isAgreed: false,
  });
  const handlechange = (event) => {
    // ... -> it is a spread operator and it is creating a copy of formdata {IT IS A CONCEPT OF DEEP COPY}   
    // using this operator all input values for name,email will be saved into an object
    // without spread operator it was only displaying a particular value if I was filling 
    // value for email then only email was visible rest other values were empty  
    setformData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  }
  const [nameError,setnameError]=useState({
    Name:"",
    email: "",
    username: "",
    mobile: "",
    isAgreed: false,
  });


  // this function is used for displaying error messages if field is not filled
  const handleSubmit=(event)=>{
    event.preventDefault();
    //  to check if form is completely filled we have used isvalid
    let isValid=true;
    // these if conditions check whether the input values are empty or not 
    // if empty i.e. if trim ==0 then isvalid will be set to false else it will skip this condition
    if(!formData.Name.trim().length)
    {
        // setnameError(true);
        isValid=false;
        setnameError({...nameError,Name:"Fill Name Field"});
    }

    if(!formData.email.trim().length)
    {
      isValid=false;
      setnameError({...nameError,email:"Fill Email"});
    }

    if(!formData.mobile.trim().length)
    {
      isValid=false;
      setnameError({...nameError,mobile:"Fill mobile"});
    }

    if(!formData.username.trim().length)
    {
      isValid=false;
      setnameError({...nameError,username:"Fill UserName"});
    }

    if(!formData.isAgreed)
    {
      isValid=false;
      setnameError({...nameError,isAgreed:"Check mark checkbox"});
    }

    // store values in local storage
    if(isValid)
    {
      isValid=false;
      localStorage.setItem("userData",formData);
      navigate("/genre");
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.content_image}>
        <div>
          <h1 id={styles.discover}>Discover new things on Superapp</h1>
        </div>
        <img src={register_image} alt="" id={styles.mainimage} />
      </div>
      <div className={styles.right}>
        <h1>Super App</h1>
        <span id={styles.account}>create your new Account</span>

        <input type="text" placeholder='Name' name="Name" id={styles.name}
          onChange={(event) => { handlechange(event) }} />
        {nameError.Name?( <p className={styles.error}> "Enter your Name"</p>):(<></>)}

        <input type="text" placeholder='UserName' name="username" id={styles.username}
          onChange={(event) => { handlechange(event) }} />
        {nameError.username?(<p className={styles.error}>"Enter your UserName"</p>):(<></>)}

        <input type="email" placeholder='Email' name='email' id={styles.email}
          onChange={(event) => { handlechange(event) }} />
        {nameError.email?(<p className={styles.error}>"Enter your Email"</p>):(<></>)}

        <input type="tel" placeholder='Mobile' name='mobile' id={styles.mobile}
          onChange={(event) => { handlechange(event) }} />
        {nameError.mobile?(<p className={styles.error}>"Enter your Mobile"</p>):(<></>)}

        <span><input type="checkbox" id={styles.checkbox} name='check'
          onChange={(e) => setformData({ ...formData, [e.target.name]: e.target.checked })} />
          share my registration data with Superapp</span>
        {nameError.isAgreed?(<p className={styles.error}>"check mark the box"</p>):(<></>)}
         
        <button onClick={handleSubmit}>SIGN UP</button>

        <p id={styles.terms}>By clicking on Sign Up,you agree to Superapp <span>Terms and Conditions of Use</span></p>
        <p id={styles.privacy}>To learn more about how Supperapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>

      </div>
    </div>
  )
}
export default Register