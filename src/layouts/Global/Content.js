import React from "react";
import LoginContent from "../../components/Login/LoginContent";

export default function Content(props) {
  return (
    <div>
      <LoginContent />
      {props.children}
    </div>
  );
}
