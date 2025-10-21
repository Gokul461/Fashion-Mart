import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../Firebase.js";
import { useNavigate } from "react-router-dom";
import LoadingButton from "./LoadingButton.jsx";
import { toast } from "react-toastify";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState("login");

  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (login === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Account created successfully!", { position: "top-right", theme: "dark" });
        setLogin("login");
        navigate("/login");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Welcome back!", { position: "top-right", theme: "dark" });
        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again!", { position: "top-right", theme: "dark" });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>{login === "login" ? "Welcome Back ": "Create your account"}</h2>
        <p>
          {login === "login"
            ? "Log in to continue exploring our exclusive styles and collections."
            : "Sign up to unlock access to personalized fashion experiences."}
        </p>

        <form onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LoadingButton
            type="submit"
            disabled={isLoading}
            className="auth-btn text-white"
          >
            {isLoading ? "Loading..." : login === "login" ? "Log In" : "Sign Up"}
          </LoadingButton>
        </form>

        <div className="auth-toggle">
          {login === "login" ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setLogin("signup")}>Sign Up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setLogin("login")}>Log In</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
