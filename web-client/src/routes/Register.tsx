import React, { useState } from "react";
import { FormInput } from "../components";
import LoadingButton from "../components/buttons/LoadingButton";
import AuthLayout from "../layouts/AuthLayout";
import logo from "../assets/logo.png";

import { useForm } from "react-hook-form";
import { Link, redirect, useNavigate } from "react-router-dom";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit } = useForm();

    const navigate = useNavigate()

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    
  };

  return (
    <AuthLayout>
      <div className="text-center flex flex-col items-center">
        <img src={logo} alt="" className="h-20 w-20" />
        <h1 className="font-bold text-xl">Create an Account</h1>
        <div>
          <p className="text-sm tracking-wide">Welcome to iLearn!</p>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="grid grid-cols-2 gap-4">
                <FormInput name="name" label="Full Name" />
                <FormInput name="username" label="Username" />
            </div>
            <FormInput name="email" label="Email" />
            <FormInput name="password" label="Password" />
            <LoadingButton loading={isLoading}>Sign up</LoadingButton>
          </form>

          <div className="mt-5">
            Have an account?{" "}
            <Link to="/" className="underline text-orange-500/70">
              sign in
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
