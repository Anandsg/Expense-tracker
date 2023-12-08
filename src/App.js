import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Welcome from "./components/pages/Welcome";
import Header from "./components/pages/Header";
import UpdateProfile from "./components/pages/UpdateProfile";
import EmailVerification from "./components/auth/EmailVerification";
import ForgotPassword from "./components/auth/ForgotPassword";
import Expese from "./components/pages/Expese";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/verify" element={<EmailVerification />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/expenses" element={<Expese />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
