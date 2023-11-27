import { SignIn } from "@clerk/nextjs";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn appearance={{ variables: { colorPrimary: "#0F172A" } }}></SignIn>
    </div>
  );
};

export default SignInPage;
