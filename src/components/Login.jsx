import React, { useState } from "react";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [emailId, setEmailId] = useState("sunny@gmail.com");
  const [password, setPassword] = useState("Sunny@123");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const toggleForm = () => {
    setError("");
    setIsLoginForm(!isLoginForm);
  };

  const handleLogin = async () => {
    try {
      setError("");
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      console.log(res);
      dispatch(addUser(res.data.data))
      navigate("/home");
    } catch (err) {
      setError(err?.response?.data);
      console.log(err);
    }
  };
  const handleSignup = async () => {
    try {
      setError("");
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          name,
          phoneNo: phoneNumber,
          emailId,
          password,
        },
        { withCredentials: true }
      );
      console.log(res);
      dispatch(addUser(res.data.data))
      setIsLoginForm(true);
    } catch (err) {
      setError(err?.response?.data);
      console.log(err);
    }
  };
  return (
    <div className="main-container">
      <div className="login-section">
        <div className="login-form">
          <div className="login-left-section">
            <div className="login-section-topInfo">
              <img
                className="order-img"
                src="https://s3-alpha-sig.figma.com/img/c323/e614/5fe44fe9aa4ff0011347ab73c5d6358d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oy4PEg3q-kV82AfbHmkKfKm418UHbAjR61Rh3mH9p~RsoHIyBRTZxLyssrOOFQLEQHjQqfqxbA2eZtDbhKtmimbaDFIGeN3MknNaVKjvOgsm60CIDgtChvY6F5SNa~PfcDwzNvhhzUuBoST1BzcRa2qCuGe8SJ7mY~YEhrHFLx9l0ZV4ftOxy9bgo~XZXT2dOCg~SCh3OSZdUSWUo0rruD9qdJgGiwKbgBAo8hNHb3VBecsCUDVuIWTNZM--mDa5KRHxiEH2yX6ZiZ0AUKNX9m6PHFiQIW6XRnfu2~2aopdGjp3LvlXUgQREC0hCrt79koNEsHjJCf82XaGCY0Uobw__"
              />
              <h1>Welcome Back 👋</h1>
              <p>Today is a new day. It's your day. You shape it.</p>
              <p>Sign {isLoginForm ? "in" : "up"} to start ordering.</p>
            </div>
            <div className="form-container">
              {!isLoginForm && (
                <>
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      value={phoneNumber}
                      type="text"
                      id="phoneno"
                      placeholder="Enter you 10 digit mobile number"
                      onChange={(e) => setPhoneNumber(Number(e.target.value))}
                    />
                  </div>
                </>
              )}
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  value={emailId}
                  type="email"
                  id="email"
                  placeholder="Examples@email.com"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  type="password"
                  id="password"
                  placeholder="At least 8 characters"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="form-error">{error}</p>
              <button
                className="sign-in-button"
                onClick={isLoginForm ? handleLogin : handleSignup}
              >
                {isLoginForm ? "Sign In" : "Continue"}
              </button>
              <p>
                {isLoginForm ? (
                  <>
                    Don't you have an account?{" "}
                    <a className="form-hyperLink" onClick={toggleForm}>
                      Sign up
                    </a>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <a className="form-hyperLink" onClick={toggleForm}>
                      Sign in
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="image">
          <img
            alt="food-img"
            src="https://s3-alpha-sig.figma.com/img/be11/353a/02f4b1476ff7565a60acdccf6f4f0dce?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oane5q0bqrP7jffE2qGaWnS4TEgp4fFqUd8zFSsi4dPSqz7ozQ5Q9gCA2Lx6V~otCJpmgCUdvWVlMYQY60VWufaiA13EdJs43LurI97NrmudDkyG3sBdfYEZQHGTB4ft4G0hjgcqdSZ5p~RHeY6BRMFR594O7o5W~4jAqshg2K4L9JlpZtuYRlc3wL8EFf1a9waJ3n6DeFdR0q2yrNMbGpX~8pDb0g7NLp8MM7xxs1jtlz6TZ1GXvnw4zlscWfz1gQ39fy3-x-ODTzlG1vfQOxtiHD97wJBACFMOCIkZWTTos8GBG1-KCxfeycm5-5hQHDQI2-KFPnGdaf5Ft0hG4w__"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
