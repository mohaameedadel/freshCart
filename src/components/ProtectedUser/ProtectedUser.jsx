import React from "react";
import Home from "../Home/Home";

export default function ProtectedUser({children}) {

  if (localStorage.getItem("userToken")) {
    return <Home />;
  } else {
    return children;
  }
}
