"use client"

import { useState } from "react";
import Sign from "./sign";
import Join from "./join";

function SignInButton() {

  const [change, setChange] = useState(false);
  const handleClick = () => {
      setChange(!change);
      console.log("clicked")
  };
  return (
    <div className="d-flex flex-column mb-3 ">
      
      {<div className="d-flex " >
        <span type='button' className={`${change ?"text-decoration-underline text-primary text-lg fw-bolder text-primary-emphasis px-3 mb-3" : "text-secondary-emphasis px-3 mb-3" } ${!change ? "disabled" : ""}`} disabled ={change} onClick={handleClick}>Sign in</span>

        <span type='button' className={`${!change ?"text-decoration-underline text-primary text-lg fw-bolder text-primary-emphasis px-3 mb-3" : "text-secondary-emphasis px-3 mb-3" } ${change ? "disabled" : ""}`}
    onClick={handleClick }>Join in</span>
        
        </div>}
        <form>
        <div className="d-flex flex-column mb-3  ">
  <button className='flex d-flex items-center gap-6 text-lg border border-primary-300 px-2 py-2 font-medium mb-2 rounded-pill w-100'>
      <img className=" col-2"
        src='https://authjs.dev/img/providers/google.svg'
        alt='Google logo'
        height='24'
        width='24'
      />
      <span className="col-10 items-center">Continue with Google</span>
    </button>
  <button className='flex d-flex w-100 items-center gap-6 text-lg border border-primary-300 px-2 py-2 font-medium mb-2 rounded-pill'>
      <img className="col-2"
        src='https://authjs.dev/img/providers/facebook.svg'
        alt='Google logo'
        height='24'
        width='24'
      />
      <span className="col-10 items-center ">Continue with meta</span>
    </button>
    </div>
    </form>

   
    <div class="or-divider text-center my-4">
  <div class="line-container">
    <span class="or-text bg-white px-3 text-muted">or connect with</span>
  </div>
</div>
{
change ?
<Sign/> : <Join/>
}

    </div>
  );
}

export default SignInButton;
