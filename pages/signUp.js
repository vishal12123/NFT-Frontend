import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import LoginAndSignUp from "../loginAndSignUp/loginAndSignUp";

const SignUp = () => {
  const [activeForm, setActiveForm] = useState("login");
  const formTitle =
    activeForm === "login"
      ? "Login"
      : activeForm === "forget"
      ? "Forget Password"
      : "Sign Up";

  return (
    <div className={Style.login}>
      <div className={Style.login_box}>
        <h1>{formTitle}</h1>
        <LoginAndSignUp activeForm={activeForm} setActiveForm={setActiveForm} />
        {activeForm !== "signup" && (
          <p className={Style.login_box_para}>
            {activeForm === "login" ? "New user?" : "Remember your password?"}{" "}
            <a
              href="#"
              onClick={() =>
                setActiveForm(activeForm === "login" ? "signup" : "login")
              }
            >
              {activeForm === "login" ? "Create an account" : "Login"}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
