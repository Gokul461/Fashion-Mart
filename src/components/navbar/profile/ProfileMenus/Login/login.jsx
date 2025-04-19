import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../Firebase.js";
import { useNavigate } from "react-router-dom";
import LoadingButton from "./LoadingButton.jsx";
import { toast } from "react-toastify";
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
        toast.success("Account created! Please log in.", {position: "top-right", theme: "dark"});
        setLogin("login");
        navigate("/login");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully", {position: "top-right", theme: "dark"});
        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {position: "top-right", theme: "dark"});
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">{login === "login" ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handleAuth}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <LoadingButton
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            disabled={isLoading}
            className="mb-3 w-100"
          >
            {isLoading ? "Loading..." : (login === "login" ? "Login" : "Sign Up")}
          </LoadingButton>
        </form>

        <p className="text-center mt-3">
  {login === "login" ? (
    <>
      Don't have an account?{" "}
      <span
        className="text-primary ms-2 cursor-pointer text-decoration-underline"
        onClick={() => setLogin("signup")}
        style={{ cursor: "pointer" }}
      >
        Sign up
      </span>
    </>
  ) : (
    <>
      Already have an account?{" "}
      <span
        className="text-primary ms-2 cursor-pointer text-decoration-underline"
        onClick={() => setLogin("login")}
        style={{ cursor: "pointer" }}
      >
        Login
      </span>
    </>
  )}
</p>
</div>
</div>
  );
};

export default Login;
