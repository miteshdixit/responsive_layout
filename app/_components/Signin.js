"use client"

import { useState } from "react";
import Sign from "./sign";
import Join from "./join";
import Image from "next/image"; // Import Image from next/image

function SignInButton() {
  const [change, setChange] = useState(false);

  const handleClick = () => {
    setChange(!change);
    console.log("clicked");
  };

  return (
    <div className="d-flex flex-column mb-3">
      <div className="d-flex">
        {/* Sign in button */}
        <span
          type="button"
          className={`${
            change
              ? "text-decoration-underline text-primary text-lg fw-bolder text-primary-emphasis px-3 mb-3"
              : "text-secondary-emphasis px-3 mb-3"
          } ${!change ? "disabled" : ""}`}
          disabled={change}
          onClick={handleClick}
        >
          Sign in
        </span>

        {/* Join in button */}
        <span
          type="button"
          className={`${
            !change
              ? "text-decoration-underline text-primary text-lg fw-bolder text-primary-emphasis px-3 mb-3"
              : "text-secondary-emphasis px-3 mb-3"
          } ${change ? "disabled" : ""}`}
          onClick={handleClick}
        >
          Join in
        </span>
      </div>

      {/* Buttons with Next.js Image component */}
      <form>
        <div className="d-flex flex-column mb-3">
          {/* Continue with Google button */}
          <button className="flex d-flex items-center gap-6 text-lg border border-primary-300 px-2 py-2 font-medium mb-2 rounded-pill w-100">
            <div className="col-2">
              <Image
                src="https://authjs.dev/img/providers/google.svg"
                alt="Google logo"
                height={24}
                width={24}
              />
            </div>
            <span className="col-10 items-center">Continue with Google</span>
          </button>

          {/* Continue with Meta button */}
          <button className="flex d-flex w-100 items-center gap-6 text-lg border border-primary-300 px-2 py-2 font-medium mb-2 rounded-pill">
            <div className="col-2">
              <Image
                src="https://authjs.dev/img/providers/facebook.svg"
                alt="Facebook logo"
                height={24}
                width={24}
              />
            </div>
            <span className="col-10 items-center">Continue with Meta</span>
          </button>
        </div>
      </form>

      {/* Or connect with divider */}
      <div className="or-divider text-center my-4">
        <div className="line-container">
          <span className="or-text bg-white px-3 text-muted">or connect with</span>
        </div>
      </div>

      {/* Render Sign or Join component based on 'change' state */}
      {change ? <Sign /> : <Join />}
    </div>
  );
}

export default SignInButton;
