import React from "react";
import LoginContent from "../../components/Login/LoginContent";
import RegisterContent from "../../components/Register/RegisterContent";

export default function Content(props) {
  return (
    <div>
      <LoginContent />
      <RegisterContent />
      {props.children}
    </div>
  );
}
