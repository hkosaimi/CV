import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ToastWrapper({ children }) {
  return (
    <>
      <ToastContainer autoClose={4000} />
      {children}
    </>
  );
}

export default ToastWrapper;
