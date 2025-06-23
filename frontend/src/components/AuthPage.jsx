import React, { useState } from "react";
import LoginPage from "./LoginPage";
import RegistrationForm from "./RegistrationForm";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return isRegistering ? (
    <RegistrationForm onSuccess={() => setIsRegistering(false)} />
  ) : (
    <LoginPage onSwitchToRegister={() => setIsRegistering(true)} />
  );
};

export default AuthPage;
