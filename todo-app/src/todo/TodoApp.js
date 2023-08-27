import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import "./TodoApp.css";
import AuthProvider from "./security/AuthContext";

export default function TodoApp() {
  return (
    <>
      <AuthProvider>
        <HeaderComponent />
        <FooterComponent />
      </AuthProvider>
    </>
  );
}
