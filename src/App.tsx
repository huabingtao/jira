import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div>
      {user ? (
        <AuthenticatedApp></AuthenticatedApp>
      ) : (
        <UnauthenticatedApp></UnauthenticatedApp>
      )}
    </div>
    // <ProjectListScreen></ProjectListScreen>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p></p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
