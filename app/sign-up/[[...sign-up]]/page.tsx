import React from "react";
import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignUp
        appearance={{
          variables: { colorPrimary: "#0F172A" },
        }}
      ></SignUp>
    </div>
  );
};

export default SignUpPage;
