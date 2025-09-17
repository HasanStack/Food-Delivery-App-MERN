import React, { useContext, useEffect, useState } from 'react'
import "./LoginPage.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../Context/StoreContext';
import axios from "axios"
import { useNavigate } from 'react-router-dom'   
const LoginPage = ({setshowLogin}) => {

const {url,setToken}=useContext(StoreContext)


const navigate = useNavigate();    


const [currState,setCurrState]=useState("Login");
const [data,setData]=useState({
  name:"",
  email:"",
  password:""
})


const onChangeHandler=(event)=>{
const name=event.target.name;
const value=event.target.value;
setData(data=>({...data,[name]:value}))
}



const onLogin=async (event)=>{
  event.preventDefault();
  let newUrl=url;
  if(currState==="Login"){
    newUrl += "/api/user/login" 
   
  }else{
    newUrl +="/api/user/register"; 
    
  }



console.log("Submitting to URL:", newUrl);



const response=await axios.post(newUrl,data);

  

if(response.data.success){
setToken(response.data.token);
localStorage.setItem("token",response.data.token); 
setshowLogin(false);

navigate('/');             


}


  else{
    alert(response.data.message)
  }

}

  return (
    <div className='login-popup'>

      <form onSubmit={onLogin} action="" className="login-popup-container">
        <div className="login-popup-title">

           <h2>{currState}</h2>
           <img  onClick={()=> setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
  <div className='login-popup-inputs'>
    {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name}   type="text" placeholder=' Enter Your name' required />}
   
    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Enter your Email' required/>



    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Enter your password' required />
  </div>

<button  type='submit'     >{currState === "Sign Up" ? "Create account" : "Login"}</button>

<div className="login-popup-condition ">
  <input type='checkbox' required/>
  <p>By continuing,I agree to the terms of use & privacy policy</p>
</div>
{currState==="Login"
?<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
:<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
}

      </form>
    </div>
  )
}

export default LoginPage;
