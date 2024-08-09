import React from "react";
import Login from "../Login/Login";

export default function ProtectedComponent({ children }) {
  if (localStorage.getItem("userToken")) {
    return children;
  } else {
    return <Login />;
  }
}
