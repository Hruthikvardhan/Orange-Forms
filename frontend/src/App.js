import React from "react";
import AuthPage from "./components/AuthPage";
import BackgroundWrapper from "./components/BackgroundWrapper";
import "./App.css";

function App() {
  return (
    <BackgroundWrapper>
      <AuthPage />
    </BackgroundWrapper>
  );
}

export default App;
