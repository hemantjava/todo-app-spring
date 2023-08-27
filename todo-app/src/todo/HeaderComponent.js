import React, { useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import TodoListComponent from "./TodoListComponent";
import LogoutComponent from "./LogoutComponent";
import { AuthContext } from "./security/AuthContext";

export default function HeaderComponent() {
  const authContext = useContext(AuthContext);
  console.log(authContext.number);
  return (
    <header>
      <BrowserRouter>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <ul className="navbar-nav">
            {
              <li>
                <Link
                  className="nav-link"
                  activeClassName="active"
                  to="/welcome"
                >
                  Home
                </Link>
              </li>
            }
            {
              <li>
                <Link className="nav-link" to="/todos">
                  Todos
                </Link>
              </li>
            }
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            }
            {
              <li>
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            }
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome" element={<WelcomeComponent />} />
          <Route path="/todos" element={<TodoListComponent />} />
          <Route path="/logout" element={<LogoutComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
}
