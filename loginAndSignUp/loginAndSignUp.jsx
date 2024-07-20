import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

//INTERNALIMPORT
import Style from "./loginAndSignUp.module.css";
import images from "../img";
import { Button } from "../components/componentsindex.js";

const SocialLogin = ({ setActiveBtn, activeBtn }) => {
  const socialImage = [
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
    {
      social: images.twitter,
      name: "Continue with twitter",
    },
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
  ];

  return (
    <div className={Style.user_box_social}>
      {socialImage.map((el, i) => (
        <div
          key={i + 1}
          onClick={() => setActiveBtn(i + 1)}
          className={`${Style.user_box_social_item} ${
            activeBtn == i + 1 ? Style.active : ""
          }`}
        >
          <Image
            src={el.social}
            alt={el.name}
            width={30}
            height={30}
            className={Style.user_box_social_item_img}
          />
          <p>
            <span>{el.name}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

const LoginForm = ({ setActiveForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      setMessage(response.data.message);
      // Redirect to dashboard or wherever you want after successful login
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className={Style.user_box_input}>
      <div className={Style.user_box_input_box}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@emample.com"
        />
      </div>

      <div className={Style.user_box_input_box}>
        <label htmlFor="password" className={Style.user_box_input_box_label}>
          <p>Password</p>
          <p>
            <a href="#" onClick={() => setActiveForm("forget")}>
              Forget password
            </a>
          </p>
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        btnName="Continue"
        classStyle={Style.button}
        onClick={handleLogin}
      />
      {message && <p className={Style.message}>{message}</p>}
    </div>
  );
};

const SignupForm = ({ setActiveForm }) => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/signup", signupData);
      setMessage(response.data.message);
      // Reset signup form after successful signup
      setSignupData({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  const handleInputChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  return (
    <div className={Style.user_box_input}>
      <div className={Style.user_box_input_box}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={signupData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
        />
      </div>
      <div className={Style.user_box_input_box}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          value={signupData.email}
          onChange={handleInputChange}
          placeholder="example@example.com"
        />
      </div>

      <div className={Style.user_box_input_box}>
        <label htmlFor="password" className={Style.user_box_input_box_label}>
          <p>Password</p>
        </label>
        <input
          type="password"
          name="password"
          value={signupData.password}
          onChange={handleInputChange}
        />
      </div>
      <div className={Style.user_box_input_box}>
        <label
          htmlFor="passwordConfirm"
          className={Style.user_box_input_box_label}
        >
          <p>Confirm Password</p>
        </label>
        <input
          type="password"
          name="passwordConfirm"
          value={signupData.passwordConfirm}
          onChange={handleInputChange}
        />
      </div>
      <Button
        btnName="Signup"
        classStyle={Style.button}
        onClick={handleSignup}
      />
      {message && <p className={Style.message}>{message}</p>}
      <p className={Style.user_box_para}>
        Already have an account?{" "}
        <a href="#" onClick={() => setActiveForm("login")}>
          Login
        </a>
      </p>
    </div>
  );
};

const ForgetPasswordForm = ({ setActiveForm }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/forgotPassword", { email });
      setMessage(response.data.message);
      // Reset forget password form after successful request
      setEmail("");
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className={Style.user_box_input}>
      <div className={Style.user_box_input_box}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@emample.com"
        />
      </div>
      <Button
        btnName="Submit"
        classStyle={Style.button}
        onClick={handleForgetPassword}
      />
      <a href="#" onClick={() => setActiveForm("login")}>
        Back to Login
      </a>
      {message && <p className={Style.message}>{message}</p>}
    </div>
  );
};

const LoginAndSignUp = ({ activeForm, setActiveForm }) => {
  const [activeBtn, setActiveBtn] = useState(1);

  return (
    <div className={Style.user}>
      <div className={Style.user_box}>
        <SocialLogin setActiveBtn={setActiveBtn} activeBtn={activeBtn} />
        <p className={Style.user_box_or}>OR</p>
        {activeForm === "login" && <LoginForm setActiveForm={setActiveForm} />}
        {activeForm === "signup" && (
          <SignupForm setActiveForm={setActiveForm} />
        )}
        {activeForm === "forget" && (
          <ForgetPasswordForm setActiveForm={setActiveForm} />
        )}
      </div>
    </div>
  );
};

export default LoginAndSignUp;
