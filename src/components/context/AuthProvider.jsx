import React, { createContext, useState, useEffect, useContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase.js";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setUserEmail(currentUser.email);
        localStorage.setItem("userEmail", currentUser.email);
      } else {
        setUser(null);
        setUserEmail(null);
        localStorage.removeItem("userEmail");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setUserEmail(null);
    localStorage.removeItem("userEmail");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userEmail,
        setUserEmail,
        setUser,
        logout,
        loading,
      }}
    >
      {!loading ? (
        children
      ) : (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
};
export default AuthProvider;