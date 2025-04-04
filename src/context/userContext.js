"use client";

import { createContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const router = useRouter();

  //Login Section
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const loginApi = "https://bestsizzler-backend.fastranking.tech/api/login";
      const response = await axios.post(loginApi, {
        email,
        password,
      });

      sessionStorage.setItem("token", response.data.token);
      router.push("/");
      console.log("Login successful:", response.data);
    } catch (err) {
      setError("Invalid email or password.");
      console.error("Login error:", err);
    }
  };

  //Signup Section
  const [fieldData, setFieldData] = useState({
    title: "",
    firstname: "",
    middlename: "",
    lastname: "",
    contactno: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API = "https://bestsizzler-backend.fastranking.tech/api/signup";

      const response = await axios.post(API, {
        title: fieldData.title,
        firstname: fieldData.firstname,
        middlename: fieldData.middlename,
        lastname: fieldData.lastname,
        contactno: fieldData.contactno,
        email: fieldData.email,
        password: fieldData.password,
        dob: fieldData.dob,
      });

      if (response) {
        console.log("Signup Successful...");
        router.push("signup-verification"); 
      }
    } catch (error) {
      console.error("Signup Failed!", error.response?.data || error.message);
    }

    sessionStorage.setItem("user", fieldData.email);
  };

  //Verify Signup OTP Section
  const [verifError, setVerifError] = useState("");
  const [otp, setOtp] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://bestsizzler-backend.fastranking.tech/api/submit-otp`,
        { otp }
      );
      console.log(response.data);

      if (response) {
        console.log("Verification Success...");
        router.push("/reg-successful");
      }
    } catch (error) {
      setVerifError("OTP entered is incorrect.");
      console.log("Verification Failed..." || error.message);
    }
  };

  const handleResendOTP = async () => {
    try {
      await axios.post(
        `https://bestsizzler-backend.fastranking.tech/api/resend-otp`,
        { email: userEmail }
      );
      console.log("OTP Resent Successfully");

      setIsResendDisabled(true);
      setTimer(300);
    } catch (error) {
      console.log("Error Resending OTP:", error.message);
    }
  };

  return (
    <UserAuthContext.Provider
      value={{
        
        loginHandler,
        setEmail,
        setPassword,
        email,
        password,
        error,

        fieldData,
        setFieldData,
        handleSubmit,

        handleVerification,
        handleResendOTP,
        verifError,
        otp,
        setOtp,
        setUserEmail,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};
